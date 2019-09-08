
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Slots {
  export const KEY = new CollectionKey("slots");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly slot: string;
    readonly isFarm: boolean;
    readonly isResource: boolean;
    readonly isTown: boolean;
    readonly isPort: boolean;
    readonly supportsBuildingLevelConversion: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.slot = values["slot"];
      this.isFarm = !!values["is_farm"];
      this.isResource = !!values["is_resource"];
      this.isTown = !!values["is_town"];
      this.isPort = !!values["is_port"];
      this.supportsBuildingLevelConversion = !!values["supports_building_level_conversion"];
    }
    
  }
}

export default Slots;
