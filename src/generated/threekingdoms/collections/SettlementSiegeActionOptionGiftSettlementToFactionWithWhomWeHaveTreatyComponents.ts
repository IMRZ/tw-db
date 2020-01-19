
import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionOptions } from "./SettlementSiegeActionOptions";
import { CampaignDiplomacyTreatyComponentSets } from "./CampaignDiplomacyTreatyComponentSets";

export namespace SettlementSiegeActionOptionGiftSettlementToFactionWithWhomWeHaveTreatyComponents {
  export const KEY = new CollectionKey("settlement_siege_action_option_gift_settlement_to_faction_with_whom_we_have_treaty_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _settlementSiegeActionOption: string;
    readonly _treatyComponentSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._settlementSiegeActionOption = values["settlement_siege_action_option"];
      this._treatyComponentSet = values["treaty_component_set"];
    }
    
    get settlementSiegeActionOption(): SettlementSiegeActionOptions.Entry | undefined {
      const collection = <SettlementSiegeActionOptions.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionOptions.KEY, SettlementSiegeActionOptions.Entry);
      return collection.find(entry => entry.settlementSiegeActionOption === this._settlementSiegeActionOption);
    }
    
    get treatyComponentSet(): CampaignDiplomacyTreatyComponentSets.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponentSets.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponentSets.KEY, CampaignDiplomacyTreatyComponentSets.Entry);
      return collection.find(entry => entry.set === this._treatyComponentSet);
    }
  }
}

export default SettlementSiegeActionOptionGiftSettlementToFactionWithWhomWeHaveTreatyComponents;
