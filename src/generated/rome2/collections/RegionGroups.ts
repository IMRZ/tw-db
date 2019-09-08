
import { CollectionCache, CollectionKey } from "../../../common";


export namespace RegionGroups {
  export const KEY = new CollectionKey("region_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly groupKey: string;
    readonly localisedName: string;
    readonly cameraPositionX: number;
    readonly cameraPositionY: number;
    readonly cameraZoom: number;
    readonly cameraHeading: number;
    readonly round: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.groupKey = values["group_key"];
      this.localisedName = values["localised_name"];
      this.cameraPositionX = values["camera_position_x"];
      this.cameraPositionY = values["camera_position_y"];
      this.cameraZoom = values["camera_zoom"];
      this.cameraHeading = values["camera_heading"];
      this.round = values["round"];
    }
    
  }
}

export default RegionGroups;
