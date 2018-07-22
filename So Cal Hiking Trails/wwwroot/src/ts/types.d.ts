import Accessor = require("esri/core/Accessor");
import Polyline = require("esri/geometry/Polyline");
import SceneView = require("esri/views/SceneView");


export type Device = ("mobilePortrait" | "desktop");

export interface State extends Accessor {
  setSelectedTrailId: (id: number) => void;
  device: Device;
  currentBasemapId: string;
  view: SceneView;
  trails: Array<Trail>;
  online: boolean;
}

export interface Trail {
  geometry: Polyline;
  name: string;
  id: number;
  difficulty: string;
  category: string;
  walktime: number;
  status: number;
  ascent: number;
  description: number;
  profileData: Array<Object>;
  hasZ: boolean;
  setZValues: (view: SceneView) => IPromise;
  createFlickrLayer: () => IPromise;
  setElevationValuesFromService: () => IPromise;
}
