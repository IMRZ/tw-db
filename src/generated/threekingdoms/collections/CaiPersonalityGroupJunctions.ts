
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityGroups } from "./CaiPersonalityGroups";
import { CaiPersonalities } from "./CaiPersonalities";

export namespace CaiPersonalityGroupJunctions {
  export const KEY = new CollectionKey("cai_personality_group_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _groupKey: string;
    readonly _personalityKey: string;
    readonly startingWeight: number;
    readonly weight1: number;
    readonly turn1: number;
    readonly weight2: number;
    readonly turn2: number;
    readonly weight3: number;
    readonly turn3: number;
    readonly weight4: number;
    readonly turn4: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._groupKey = values["group_key"];
      this._personalityKey = values["personality_key"];
      this.startingWeight = values["starting_weight"];
      this.weight1 = values["weight1"];
      this.turn1 = values["turn1"];
      this.weight2 = values["weight2"];
      this.turn2 = values["turn2"];
      this.weight3 = values["weight3"];
      this.turn3 = values["turn3"];
      this.weight4 = values["weight4"];
      this.turn4 = values["turn4"];
    }
    
    get groupKey(): CaiPersonalityGroups.Entry | undefined {
      const collection = <CaiPersonalityGroups.Entry[]>this.collectionCache.getCollection(CaiPersonalityGroups.KEY, CaiPersonalityGroups.Entry);
      return collection.find(entry => entry.key === this._groupKey);
    }
    
    get personalityKey(): CaiPersonalities.Entry | undefined {
      const collection = <CaiPersonalities.Entry[]>this.collectionCache.getCollection(CaiPersonalities.KEY, CaiPersonalities.Entry);
      return collection.find(entry => entry.key === this._personalityKey);
    }
  }
}

export default CaiPersonalityGroupJunctions;
