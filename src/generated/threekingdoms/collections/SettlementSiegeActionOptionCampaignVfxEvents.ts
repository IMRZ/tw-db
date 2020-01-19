
import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionOptions } from "./SettlementSiegeActionOptions";
import { CampaignVfxCampaignVfxEventIds } from "./CampaignVfxCampaignVfxEventIds";

export namespace SettlementSiegeActionOptionCampaignVfxEvents {
  export const KEY = new CollectionKey("settlement_siege_action_option_campaign_vfx_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _settlementSiegeActionOption: string;
    readonly _campaignVfxEvent: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._settlementSiegeActionOption = values["settlement_siege_action_option"];
      this._campaignVfxEvent = values["campaign_vfx_event"];
    }
    
    get settlementSiegeActionOption(): SettlementSiegeActionOptions.Entry | undefined {
      const collection = <SettlementSiegeActionOptions.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionOptions.KEY, SettlementSiegeActionOptions.Entry);
      return collection.find(entry => entry.settlementSiegeActionOption === this._settlementSiegeActionOption);
    }
    
    get campaignVfxEvent(): CampaignVfxCampaignVfxEventIds.Entry | undefined {
      const collection = <CampaignVfxCampaignVfxEventIds.Entry[]>this.collectionCache.getCollection(CampaignVfxCampaignVfxEventIds.KEY, CampaignVfxCampaignVfxEventIds.Entry);
      return collection.find(entry => entry.campaignVfxEvent === this._campaignVfxEvent);
    }
  }
}

export default SettlementSiegeActionOptionCampaignVfxEvents;
