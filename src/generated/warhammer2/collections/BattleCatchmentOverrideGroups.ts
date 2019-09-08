
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleCatchmentOverrideGroups {
  export const KEY = new CollectionKey("battle_catchment_override_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly group: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.group = values["group"];
    }
    
  }
}

export default BattleCatchmentOverrideGroups;
