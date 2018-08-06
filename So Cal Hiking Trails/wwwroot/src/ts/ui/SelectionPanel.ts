import * as dom from "dojo/dom";
import * as on from "dojo/on";
import * as domConstruct from "dojo/dom-construct";
import config from "../config";
import noUiSlider = require("noUiSlider");
import "../../style/selection-panel.scss";
import "../../style/nouislider.scss";
import { State, Trail } from "../types";

export default class SelectionPanel {

  trailsPanel;
  filterPanel;
  trails: Array<Trail>;
  state: State;
  container: any;

  constructor(trails, state: State) {

    this.state = state;
    this.trails = trails;

    this.container = dom.byId("selectionPanel");

    this.trailsPanel = dom.byId("trailsPanel");
  }
}

