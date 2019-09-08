
import { CollectionCache, CollectionKey } from "../../../common";


export namespace RegionGroups {
  export const KEY = new CollectionKey("region_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly groupKey: string;
    readonly localisedName: string;
    readonly round: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.groupKey = values["group_key"];
      this.localisedName = values["localised_name"];
      this.round = values["round"];
    }
    
  }
}

export default RegionGroups;
