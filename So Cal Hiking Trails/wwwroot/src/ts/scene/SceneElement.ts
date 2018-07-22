import config from "../config";
import { getTrailRenderer, getLabelingInfo } from "./utils";
import * as domConstruct from "dojo/dom-construct";
import * as dom from "dojo/dom";
import * as on from "dojo/on";

import * as WebScene from "esri/WebScene";
import * as SceneView from "esri/views/SceneView";
import * as FeatureLayer from "esri/layers/FeatureLayer";
import * as Query from "esri/tasks/support/Query";
import * as GroupLayer from "esri/layers/GroupLayer";
import * as UniqueValueRenderer from "esri/renderers/UniqueValueRenderer";
import * as NavigationToggle from "esri/widgets/NavigationToggle";
import * as Zoom from "esri/widgets/Zoom";
import * as Compass from "esri/widgets/Compass";
import * as all from "dojo/promise/all";
import * as esriConfig from "esri/config";
import * as watchUtils from "esri/core/watchUtils";

import "../../style/scene-panel.scss";

import { State } from "../types";

esriConfig.request.corsEnabledServers.push("wtb.maptiles.arcgis.com");

export default class SceneElement {

  state: State;
  view: SceneView;
  trailsLayer: FeatureLayer;
  trails: Array<any>;

  constructor(state: State) {
    this.state = state;
    this.view = this.initView();
    this.setViewPadding();

    this.trailsLayer = this.initTrailsLayer();
    this.view.when(() => {
      this.view.map.add(this.trailsLayer);
    });

    this.view.on("click", (event) => {
      this.onViewClick(event);
    });

    (<any>window).view = this.view;

    state.watch("device", () => {
      this.setViewPadding();
    });

    state.watch("currentBasemapId", (id) => {
      this.setCurrentBasemap(id);
    });
  }

  private initView() {
    const webscene = new WebScene({
      portalItem: {
        id: config.scene.websceneItemId
      }
    });

    const view = new SceneView({
      container: "scenePanel",
      map: webscene,
      constraints: {
        tilt: {
          max: 80,
          mode: "manual"
        }
      },
      qualityProfile: "high",
      environment: {
        lighting: {
          directShadowsEnabled: true,
          ambientOcclusionEnabled: true
        },
        atmosphereEnabled: true,
        atmosphere: {
          quality: "high"
        },
        starsEnabled: false
      },
      ui: {
        components: ["attribution"]
      },
      popup: {
        dockEnabled: false,
        collapsed: true
      }
    });

    const navigationToggle = new NavigationToggle({
      view: view
    });

    const zoom = new Zoom({
      view: view
    });

    const compass = new Compass({
      view: view
    });

    view.ui.add([zoom, navigationToggle, compass], "top-right");
    return view;
  }

  private setViewPadding() {
    if (this.state.device === "mobilePortrait") {
      this.view.padding = {
        top: 30,
        left: 0
      };
    }
    else {
      this.view.padding = {
        top: 30,
        left: 350
      };
    }
  }

  private initTrailLayer() {
    return new FeatureLayer({
      url: config.data.trailsServiceUrl,
      title: "So Cal Hiking Trails",
      outFields: ["*"],
      renderer: getTrailRenderer(),
      elevationInfo: {
        mode: "on-the-ground"
      },
      labelsVisible: true,
      popupEnabled: false,
      labelingInfo: getLabelingInfo({ selection: null })
    })
  }

  private initTrailsLayer() {
    return new FeatureLayer({
      url: config.data.trailsServiceUrl,
      title: "So Cal Hiking trails",
      outFields: ["*"],
      renderer: getTrailRenderer(),
      elevationInfo: {
        mode: "on-the-ground"
      },
      labelsVisible: true,
      popupEnabled: false,
      labelingInfo: getLabelingInfo({ selection: null })
    });
  }

  private setCurrentBasemap(id) {
    const basemapGroup = <GroupLayer>this.view.map.layers.filter((layer) => {
      return (layer.title === "Basemap");
    }).getItemAt(0);

    const activateLayer = basemapGroup.layers.filter((layer) => {
      if (layer.id === id) {
        return true;
      }
      return false;
    }).getItemAt(0);

    activateLayer.visible = true;
  }

  private onViewClick(event) {

    // check if the user is online
    if (this.state.online) {
      this.view.hitTest(event)
        .then((response) => {
          const result = response.results[0];


          const query = this.trailsLayer.createQuery();
          query.geometry = result.mapPoint;
          query.distance = 200;
          query.units = "meters";
          query.spatialRelationship = "intersects";
          this.trailsLayer.queryFeatures(query)
            .then((results) => {
              if (results.features.length > 0) {
                this.state.setSelectedTrailId(results.features[0].attributes[config.data.trailAttributes.id]);
              } else {
                this.state.setSelectedTrailId(null);
              }
            })
            .catch(err => console.log(err));
         
        });
    }
  }


}