import * as on from "dojo/on";
import * as dom from "dojo/dom";
import SelectionPanel from "./SelectionPanel";
import DetailPanel from "./DetailPanel";
import { State } from "../types";
import * as SceneView from "esri/views/SceneView";
import * as WebScene from "esri/WebScene";


import "../../style/menu-panel.scss";

export default class MenuPanel {

  state: State;
  container: HTMLElement;

  constructor(state: State) {
    const trails = state.trails;
    this.state = state;
    this.container = <HTMLElement>document.querySelector(".menuPanel");

    const selectionPanel = new SelectionPanel(trails, state);
    const detailPanel = new DetailPanel(trails, state);

    const panels = {
      selectionPanel,
      detailPanel
    };

    this.initVisiblePanel();

    state.watch("visiblePanel", (newPanel, oldPanel) => {

      // activate the selected panel (newPanel)
      document.querySelector(`[data-tab="${newPanel}"]`).classList.add("btn-primary");
      panels[newPanel].container.classList.remove("d-none");

      // deactivate the old active panel (oldPanel)
      document.querySelector(`[data-tab="${oldPanel}"]`).classList.remove("btn-primary");
      panels[oldPanel].container.classList.add("d-none");
    });

    on(document.querySelector(".menuTabs"), "click", (evt) => {
      this.state.visiblePanel = evt.target.dataset.tab;
    });
  }

  private initVisiblePanel() {
    this.state.visiblePanel = "selectionPanel";
  }
}
