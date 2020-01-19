
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ProvincialResourceIds {
  export const KEY = new CollectionKey("provincial_resource_ids");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly provincialResourceFlag: string;
    readonly localisedDescription: string;
    readonly iconPath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.provincialResourceFlag = values["provincial_resource_flag"];
      this.localisedDescription = values["localised_description"];
      this.iconPath = values["icon_path"];
    }
    
  }
}

export default ProvincialResourceIds;
