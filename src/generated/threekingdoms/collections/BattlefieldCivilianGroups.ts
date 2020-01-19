
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattlefieldCivilianGroups {
  export const KEY = new CollectionKey("battlefield_civilian_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default BattlefieldCivilianGroups;
