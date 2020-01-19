
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiDiplomacyDealGenerationGoalNames } from "./CaiDiplomacyDealGenerationGoalNames";

export namespace CaiDiplomacyDealGenerationGoalFailingRelationships {
  export const KEY = new CollectionKey("cai_diplomacy_deal_generation_goal_failing_relationships");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effectingGoalKey: string;
    readonly _effectedGoalKey: string;
    readonly effectingGoalFailed: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effectingGoalKey = values["effecting_goal_key"];
      this._effectedGoalKey = values["effected_goal_key"];
      this.effectingGoalFailed = !!values["effecting_goal_failed"];
    }
    
    get effectingGoalKey(): CaiDiplomacyDealGenerationGoalNames.Entry | undefined {
      const collection = <CaiDiplomacyDealGenerationGoalNames.Entry[]>this.collectionCache.getCollection(CaiDiplomacyDealGenerationGoalNames.KEY, CaiDiplomacyDealGenerationGoalNames.Entry);
      return collection.find(entry => entry.key === this._effectingGoalKey);
    }
    
    get effectedGoalKey(): CaiDiplomacyDealGenerationGoalNames.Entry | undefined {
      const collection = <CaiDiplomacyDealGenerationGoalNames.Entry[]>this.collectionCache.getCollection(CaiDiplomacyDealGenerationGoalNames.KEY, CaiDiplomacyDealGenerationGoalNames.Entry);
      return collection.find(entry => entry.key === this._effectedGoalKey);
    }
  }
}

export default CaiDiplomacyDealGenerationGoalFailingRelationships;
