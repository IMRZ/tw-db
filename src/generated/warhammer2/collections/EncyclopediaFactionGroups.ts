
import { CollectionCache, CollectionKey } from "../../../common";


export namespace EncyclopediaFactionGroups {
  export const KEY = new CollectionKey("encyclopedia_faction_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly groupId: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.groupId = values["group_id"];
    }
    
  }
}

export default EncyclopediaFactionGroups;
