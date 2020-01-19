
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { BmdExportTypes } from "./BmdExportTypes";

export namespace CampaignGroupSettlementBattleBmdExportTypes {
  export const KEY = new CollectionKey("campaign_group_settlement_battle_bmd_export_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _bmdExportType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._bmdExportType = values["bmd_export_type"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get bmdExportType(): BmdExportTypes.Entry | undefined {
      const collection = <BmdExportTypes.Entry[]>this.collectionCache.getCollection(BmdExportTypes.KEY, BmdExportTypes.Entry);
      return collection.find(entry => entry.name === this._bmdExportType);
    }
  }
}

export default CampaignGroupSettlementBattleBmdExportTypes;
