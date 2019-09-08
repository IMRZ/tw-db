
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBmdLayerGroupIds } from "./CampaignBmdLayerGroupIds";
import { BmdExportTypes } from "./BmdExportTypes";

export namespace CampaignBmdLayerGroupBmdExportTypesJunctions {
  export const KEY = new CollectionKey("campaign_bmd_layer_group_bmd_export_types_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignBmdLayerGroup: string;
    readonly _bmdExportTypes: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignBmdLayerGroup = values["campaign_bmd_layer_group"];
      this._bmdExportTypes = values["bmd_export_types"];
    }
    
    get campaignBmdLayerGroup(): CampaignBmdLayerGroupIds.Entry | undefined {
      const collection = <CampaignBmdLayerGroupIds.Entry[]>this.collectionCache.getCollection(CampaignBmdLayerGroupIds.KEY, CampaignBmdLayerGroupIds.Entry);
      return collection.find(entry => entry.id === this._campaignBmdLayerGroup);
    }
    
    get bmdExportTypes(): BmdExportTypes.Entry | undefined {
      const collection = <BmdExportTypes.Entry[]>this.collectionCache.getCollection(BmdExportTypes.KEY, BmdExportTypes.Entry);
      return collection.find(entry => entry.name === this._bmdExportTypes);
    }
  }
}

export default CampaignBmdLayerGroupBmdExportTypesJunctions;
