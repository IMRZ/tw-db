
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitPortholeCameraSettings {
  export const KEY = new CollectionKey("unit_porthole_camera_settings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly distance: number;
    readonly theta: number;
    readonly phi: number;
    readonly fov: number;
    readonly targetX: number;
    readonly targetY: number;
    readonly targetZ: number;
    readonly environmentFile: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.distance = values["distance"];
      this.theta = values["theta"];
      this.phi = values["phi"];
      this.fov = values["fov"];
      this.targetX = values["target_x"];
      this.targetY = values["target_y"];
      this.targetZ = values["target_z"];
      this.environmentFile = values["environment_file"];
    }
    
  }
}

export default UnitPortholeCameraSettings;
