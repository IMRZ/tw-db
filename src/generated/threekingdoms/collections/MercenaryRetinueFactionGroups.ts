
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MercenaryRetinueFactionGroups {
  export const KEY = new CollectionKey("mercenary_retinue_faction_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default MercenaryRetinueFactionGroups;
