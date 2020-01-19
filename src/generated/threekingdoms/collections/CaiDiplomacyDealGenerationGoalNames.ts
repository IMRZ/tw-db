
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiDiplomacyDealGenerationGoalNames {
  export const KEY = new CollectionKey("cai_diplomacy_deal_generation_goal_names");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CaiDiplomacyDealGenerationGoalNames;
