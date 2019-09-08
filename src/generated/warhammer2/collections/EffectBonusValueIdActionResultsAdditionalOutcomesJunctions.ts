
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsActionResultsAdditionalOutcomes } from "./CampaignBonusValueIdsActionResultsAdditionalOutcomes";
import { ActionResultsAdditionalOutcomes } from "./ActionResultsAdditionalOutcomes";

export namespace EffectBonusValueIdActionResultsAdditionalOutcomesJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_id_action_results_additional_outcomes_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _actionResultsAdditionalOutcomeRecord: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._actionResultsAdditionalOutcomeRecord = values["action_results_additional_outcome_record"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsActionResultsAdditionalOutcomes.Entry | undefined {
      const collection = <CampaignBonusValueIdsActionResultsAdditionalOutcomes.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsActionResultsAdditionalOutcomes.KEY, CampaignBonusValueIdsActionResultsAdditionalOutcomes.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get actionResultsAdditionalOutcomeRecord(): ActionResultsAdditionalOutcomes.Entry | undefined {
      const collection = <ActionResultsAdditionalOutcomes.Entry[]>this.collectionCache.getCollection(ActionResultsAdditionalOutcomes.KEY, ActionResultsAdditionalOutcomes.Entry);
      return collection.find(entry => entry.key === this._actionResultsAdditionalOutcomeRecord);
    }
  }
}

export default EffectBonusValueIdActionResultsAdditionalOutcomesJunctions;
