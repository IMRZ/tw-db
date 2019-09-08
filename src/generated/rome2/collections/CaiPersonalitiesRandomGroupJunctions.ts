
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesRandomGroups } from "./CaiPersonalitiesRandomGroups";
import { CaiPersonalities } from "./CaiPersonalities";

export namespace CaiPersonalitiesRandomGroupJunctions {
  export const KEY = new CollectionKey("cai_personalities_random_group_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _randomPersonalityGroupKey: string;
    readonly _personalityKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._randomPersonalityGroupKey = values["random_personality_group_key"];
      this._personalityKey = values["personality_key"];
    }
    
    get randomPersonalityGroupKey(): CaiPersonalitiesRandomGroups.Entry | undefined {
      const collection = <CaiPersonalitiesRandomGroups.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesRandomGroups.KEY, CaiPersonalitiesRandomGroups.Entry);
      return collection.find(entry => entry.randomPersonalityGroupKey === this._randomPersonalityGroupKey);
    }
    
    get personalityKey(): CaiPersonalities.Entry | undefined {
      const collection = <CaiPersonalities.Entry[]>this.collectionCache.getCollection(CaiPersonalities.KEY, CaiPersonalities.Entry);
      return collection.find(entry => entry.key === this._personalityKey);
    }
  }
}

export default CaiPersonalitiesRandomGroupJunctions;
