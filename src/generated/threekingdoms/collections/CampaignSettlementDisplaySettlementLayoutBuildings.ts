
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSettlementDisplaySettlementLayoutIds } from "./CampaignSettlementDisplaySettlementLayoutIds";
import { BuildingLevels } from "./BuildingLevels";
import { CampaignSettlementDisplayBuildings } from "./CampaignSettlementDisplayBuildings";

export namespace CampaignSettlementDisplaySettlementLayoutBuildings {
  export const KEY = new CollectionKey("campaign_settlement_display_settlement_layout_buildings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _layout: string;
    readonly _buildingLevel: string;
    readonly _buildingModel: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._layout = values["layout"];
      this._buildingLevel = values["building_level"];
      this._buildingModel = values["building_model"];
    }
    
    get layout(): CampaignSettlementDisplaySettlementLayoutIds.Entry | undefined {
      const collection = <CampaignSettlementDisplaySettlementLayoutIds.Entry[]>this.collectionCache.getCollection(CampaignSettlementDisplaySettlementLayoutIds.KEY, CampaignSettlementDisplaySettlementLayoutIds.Entry);
      return collection.find(entry => entry.layout === this._layout);
    }
    
    get buildingLevel(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevel);
    }
    
    get buildingModel(): CampaignSettlementDisplayBuildings.Entry | undefined {
      const collection = <CampaignSettlementDisplayBuildings.Entry[]>this.collectionCache.getCollection(CampaignSettlementDisplayBuildings.KEY, CampaignSettlementDisplayBuildings.Entry);
      return collection.find(entry => entry._modelId === this._buildingModel);
    }
  }
}

export default CampaignSettlementDisplaySettlementLayoutBuildings;
