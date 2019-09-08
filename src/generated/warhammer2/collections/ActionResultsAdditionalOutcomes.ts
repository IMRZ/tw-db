
import { CollectionCache, CollectionKey } from "../../../common";
import { ActionResults } from "./ActionResults";
import { ActionResultsAdditionalOutcomesEnums } from "./ActionResultsAdditionalOutcomesEnums";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
import { EffectBundleAdvancementStages } from "./EffectBundleAdvancementStages";

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
    readonly affectsTarget: boolean;
    readonly _advancementStage: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._actionResultKey = values["action_result_key"];
      this._outcome = values["outcome"];
      this.value = values["value"];
      this._effectRecord = values["effect_record"];
      this._effectScopeRecord = values["effect_scope_record"];
      this.key = values["key"];
      this.opportuneFailureWeighting = values["opportune_failure_weighting"];
      this.affectsTarget = !!values["affects_target"];
      this._advancementStage = values["advancement_stage"];
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
    
    get advancementStage(): EffectBundleAdvancementStages.Entry | undefined {
      const collection = <EffectBundleAdvancementStages.Entry[]>this.collectionCache.getCollection(EffectBundleAdvancementStages.KEY, EffectBundleAdvancementStages.Entry);
      return collection.find(entry => entry.key === this._advancementStage);
    }
  }
}

export default ActionResultsAdditionalOutcomes;
