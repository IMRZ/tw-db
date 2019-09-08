
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalitiesRandomGroups {
  export const KEY = new CollectionKey("cai_personalities_random_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly randomPersonalityGroupKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.randomPersonalityGroupKey = values["random_personality_group_key"];
    }
    
  }
}

export default CaiPersonalitiesRandomGroups;
