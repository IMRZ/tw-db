
import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionEffectGroups } from "./SettlementSiegeActionEffectGroups";
import { CampaignDiplomacyAutomaticDealSituations } from "./CampaignDiplomacyAutomaticDealSituations";

export namespace SettlementSiegeActionEffectDiplomaticDeals {
  export const KEY = new CollectionKey("settlement_siege_action_effect_diplomatic_deals");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effectGroup: string;
    readonly _diplomaticDeal: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effectGroup = values["effect_group"];
      this._diplomaticDeal = values["diplomatic_deal"];
    }
    
    get effectGroup(): SettlementSiegeActionEffectGroups.Entry | undefined {
      const collection = <SettlementSiegeActionEffectGroups.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionEffectGroups.KEY, SettlementSiegeActionEffectGroups.Entry);
      return collection.find(entry => entry.effectGroup === this._effectGroup);
    }
    
    get diplomaticDeal(): CampaignDiplomacyAutomaticDealSituations.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticDealSituations.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticDealSituations.KEY, CampaignDiplomacyAutomaticDealSituations.Entry);
      return collection.find(entry => entry.situation === this._diplomaticDeal);
    }
  }
}

export default SettlementSiegeActionEffectDiplomaticDeals;
