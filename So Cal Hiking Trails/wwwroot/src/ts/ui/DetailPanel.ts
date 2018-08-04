import * as Point from "esri/geometry/Point";
import * as dom from "dojo/dom";
import * as on from "dojo/on";
import * as domConstruct from "dojo/dom-construct";
import * as domClass from "dojo/dom-class";
import config from "../config";

declare const AmCharts: any;

import "amcharts3";
import "amcharts3/amcharts/serial";

import "../../style/detail-panel.scss";

import { State, Trail } from "../types";

export default class SelectionPanel {

  trails: Array<Trail>;
  state: State;
  container: any;
  detailTitle: any;
  detailMeta: any;
  detailElevationProfile: any;
  detailDescription: any;

  constructor(trails, state: State) {
    this.state = state;
    this.trails = trails;
    this.container = dom.byId("detailPanel");
    this.detailTitle = dom.byId("detailTitle");
    this.detailMeta = dom.byId("detailMeta");
    this.detailDescription = dom.byId("detailDescription");
    this.detailElevationProfile = dom.byId("detailElevationProfile");

    this.emptyDetails();

    state.watch("selectedTrailId", (id) => {
      this.emptyDetails();
      if (id) {
        const selectedTrail = this.trails.filter((trail) => { return trail.id === id; })[0];
        this.displayInfo(selectedTrail);
      }
    });

    state.watch("device", () => {
      if (!this.state.selectedTrailId) {
        this.displayAppInfo();
      }
    });

  }

  emptyDetails() {
    domConstruct.empty(this.detailTitle);
    domConstruct.empty(this.detailDescription);
    domConstruct.empty(this.detailMeta);

    this.displayAppInfo();
  }

  displayAppInfo() {
    if (this.state.device === "mobilePortrait") {
      this.detailMeta.innerHTML = `<div class="col">This app shows hikes in Southern California. Select a hike on the map to find out more about it.</div>`;
    } else {
      this.detailMeta.innerHTML = `<div class="col">Select a hike in the map or in the Hikes panel to see more details about it.</div>`;
    }
  }

  displayInfo(trail: Trail): void {
    this.detailTitle.innerHTML = `<h3 class="card-title">${trail.name}<h3>`;
    this.createTrailMeta(trail);
    this.detailDescription.innerHTML = `<p class="card-text">${trail.description}<p>`;
  }

  createTrailMeta(trail) {
    console.log(trail);
    this.detailMeta.innerHTML = `
      ${ trail.ascent ? `<div class="col"><small class="text-muted">Ascent<br>${trail.ascent} ft</small></div>` : ""}
      ${ trail.walktime ? `<div class="col"><small class="text-muted">Time<br>${trail.walktime} hr</small></div>` : "" }
    `;
  }

}
