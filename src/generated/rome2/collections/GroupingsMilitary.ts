
import { CollectionCache, CollectionKey } from "../../../common";


export namespace GroupingsMilitary {
  export const KEY = new CollectionKey("groupings_military");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly militaryGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.militaryGroup = values["military_group"];
    }
    
  }
}

export default GroupingsMilitary;
