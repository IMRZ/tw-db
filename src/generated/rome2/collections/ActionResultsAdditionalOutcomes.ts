
import { CollectionCache, CollectionKey } from "../../../common";
import { ActionResults } from "./ActionResults";
import { ActionResultsAdditionalOutcomesEnums } from "./ActionResultsAdditionalOutcomesEnums";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";

export namespace ActionResultsAdditionalOutcomes {
  export const KEY = new CollectionKey("action_results_additional_outcomes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _actionResultKey: string;
    readonly _outcome: string;
    readonly value: number;
    readonly _effectRecord: string;
    readonly _effectScopeRecord: string;
    readonly key: string;
    readonly opportuneFailureWeighting: number;
    readonly authorityValueCoefficient: number;
    readonly subterfugeValueCoefficient: number;
    readonly zealValueCoefficient: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._actionResultKey = values["action_result_key"];
      this._outcome = values["outcome"];
      this.value = values["value"];
      this._effectRecord = values["effect_record"];
      this._effectScopeRecord = values["effect_scope_record"];
      this.key = values["key"];
      this.opportuneFailureWeighting = values["opportune_failure_weighting"];
      this.authorityValueCoefficient = values["authority_value_coefficient"];
      this.subterfugeValueCoefficient = values["subterfuge_value_coefficient"];
      this.zealValueCoefficient = values["zeal_value_coefficient"];
    }
    
    get actionResultKey(): ActionResults.Entry | undefined {
      const collection = <ActionResults.Entry[]>this.collectionCache.getCollection(ActionResults.KEY, ActionResults.Entry);
      return collection.find(entry => entry.key === this._actionResultKey);
    }
    
    get outcome(): ActionResultsAdditionalOutcomesEnums.Entry | undefined {
      const collection = <ActionResultsAdditionalOutcomesEnums.Entry[]>this.collectionCache.getCollection(ActionResultsAdditionalOutcomesEnums.KEY, ActionResultsAdditionalOutcomesEnums.Entry);
      return collection.find(entry => entry.key === this._outcome);
    }
    
    get effectRecord(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effectRecord);
    }
    
    get effectScopeRecord(): CampaignEffectScopes.Entry | undefined {
      const collection = <CampaignEffectScopes.Entry[]>this.collectionCache.getCollection(CampaignEffectScopes.KEY, CampaignEffectScopes.Entry);
      return collection.find(entry => entry.key === this._effectScopeRecord);
    }
  }
}

export default ActionResultsAdditionalOutcomes;
