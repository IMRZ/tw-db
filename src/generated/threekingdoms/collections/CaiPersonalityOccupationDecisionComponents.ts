
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalityOccupationDecisionComponents {
  export const KEY = new CollectionKey("cai_personality_occupation_decision_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly foodShortageCap: number;
    readonly foodExcessCap: number;
    readonly squalorCap: number;
    readonly minAttitude: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.foodShortageCap = values["food_shortage_cap"];
      this.foodExcessCap = values["food_excess_cap"];
      this.squalorCap = values["squalor_cap"];
      this.minAttitude = values["min_attitude"];
    }
    
  }
}

export default CaiPersonalityOccupationDecisionComponents;
