
import { CollectionCache, CollectionKey } from "../../../common";


export namespace DiplomacyKeyGroups {
  export const KEY = new CollectionKey("diplomacy_key_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly groupId: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.groupId = values["group_id"];
    }
    
  }
}

export default DiplomacyKeyGroups;
