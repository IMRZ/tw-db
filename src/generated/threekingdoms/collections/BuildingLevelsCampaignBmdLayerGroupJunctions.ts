
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { CampaignBmdLayerGroupIds } from "./CampaignBmdLayerGroupIds";

export namespace BuildingLevelsCampaignBmdLayerGroupJunctions {
  export const KEY = new CollectionKey("building_levels_campaign_bmd_layer_group_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _buildingLevel: string;
    readonly _campaignBmdLayerGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._buildingLevel = values["building_level"];
      this._campaignBmdLayerGroup = values["campaign_bmd_layer_group"];
    }
    
    get buildingLevel(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevel);
    }
    
    get campaignBmdLayerGroup(): CampaignBmdLayerGroupIds.Entry | undefined {
      const collection = <CampaignBmdLayerGroupIds.Entry[]>this.collectionCache.getCollection(CampaignBmdLayerGroupIds.KEY, CampaignBmdLayerGroupIds.Entry);
      return collection.find(entry => entry.id === this._campaignBmdLayerGroup);
    }
  }
}

export default BuildingLevelsCampaignBmdLayerGroupJunctions;
