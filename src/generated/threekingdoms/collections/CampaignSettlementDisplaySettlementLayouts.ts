
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapSettlements } from "./CampaignMapSettlements";
import { CampaignSettlementDisplaySettlementLayoutIds } from "./CampaignSettlementDisplaySettlementLayoutIds";

export namespace CampaignSettlementDisplaySettlementLayouts {
  export const KEY = new CollectionKey("campaign_settlement_display_settlement_layouts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _settlement: string;
    readonly _layout: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._settlement = values["settlement"];
      this._layout = values["layout"];
    }
    
    get settlement(): CampaignMapSettlements.Entry | undefined {
      const collection = <CampaignMapSettlements.Entry[]>this.collectionCache.getCollection(CampaignMapSettlements.KEY, CampaignMapSettlements.Entry);
      return collection.find(entry => entry.settlementId === this._settlement);
    }
    
    get layout(): CampaignSettlementDisplaySettlementLayoutIds.Entry | undefined {
      const collection = <CampaignSettlementDisplaySettlementLayoutIds.Entry[]>this.collectionCache.getCollection(CampaignSettlementDisplaySettlementLayoutIds.KEY, CampaignSettlementDisplaySettlementLayoutIds.Entry);
      return collection.find(entry => entry.layout === this._layout);
    }
  }
}

export default CampaignSettlementDisplaySettlementLayouts;
