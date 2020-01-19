
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapSettlements } from "./CampaignMapSettlements";

export namespace CampaignSettlementDisplaySettlementRotations {
  export const KEY = new CollectionKey("campaign_settlement_display_settlement_rotations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _settlement: string;
    readonly rotation: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._settlement = values["settlement"];
      this.rotation = values["rotation"];
    }
    
    get settlement(): CampaignMapSettlements.Entry | undefined {
      const collection = <CampaignMapSettlements.Entry[]>this.collectionCache.getCollection(CampaignMapSettlements.KEY, CampaignMapSettlements.Entry);
      return collection.find(entry => entry.settlementId === this._settlement);
    }
  }
}

export default CampaignSettlementDisplaySettlementRotations;
