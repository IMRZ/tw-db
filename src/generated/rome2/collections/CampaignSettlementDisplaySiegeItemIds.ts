
import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldDeployableSiegeItems } from "./BattlefieldDeployableSiegeItems";
import { CampaignSettlementDisplaySprawlPieces } from "./CampaignSettlementDisplaySprawlPieces";

export namespace CampaignSettlementDisplaySiegeItemIds {
  export const KEY = new CollectionKey("campaign_settlement_display_siege_item_ids");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _battlefieldDeployableSiegeItem: string;
    readonly _sprawlPiece: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._battlefieldDeployableSiegeItem = values["battlefield_deployable_siege_item"];
      this._sprawlPiece = values["sprawl_piece"];
    }
    
    get battlefieldDeployableSiegeItem(): BattlefieldDeployableSiegeItems.Entry | undefined {
      const collection = <BattlefieldDeployableSiegeItems.Entry[]>this.collectionCache.getCollection(BattlefieldDeployableSiegeItems.KEY, BattlefieldDeployableSiegeItems.Entry);
      return collection.find(entry => entry.key === this._battlefieldDeployableSiegeItem);
    }
    
    get sprawlPiece(): CampaignSettlementDisplaySprawlPieces.Entry | undefined {
      const collection = <CampaignSettlementDisplaySprawlPieces.Entry[]>this.collectionCache.getCollection(CampaignSettlementDisplaySprawlPieces.KEY, CampaignSettlementDisplaySprawlPieces.Entry);
      return collection.find(entry => entry.key === this._sprawlPiece);
    }
  }
}

export default CampaignSettlementDisplaySiegeItemIds;
