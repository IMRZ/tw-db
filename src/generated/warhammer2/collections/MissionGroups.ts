
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MissionGroups {
  export const KEY = new CollectionKey("mission_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly groupKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.groupKey = values["group_key"];
    }
    
  }
}

export default MissionGroups;
