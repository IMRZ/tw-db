
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSettlementDisplayBuildingIds } from "./CampaignSettlementDisplayBuildingIds";
import { CampaignSettlementDisplayBuildingConstructionEnums } from "./CampaignSettlementDisplayBuildingConstructionEnums";

export namespace CampaignSettlementDisplayBuildingConstructions {
  export const KEY = new CollectionKey("campaign_settlement_display_building_constructions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _displayBuildingKey: string;
    readonly _constructionType: string;
    readonly phase: number;
    readonly buildingPath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._displayBuildingKey = values["display_building_key"];
      this._constructionType = values["construction_type"];
      this.phase = values["phase"];
      this.buildingPath = values["building_path"];
    }
    
    get displayBuildingKey(): CampaignSettlementDisplayBuildingIds.Entry | undefined {
      const collection = <CampaignSettlementDisplayBuildingIds.Entry[]>this.collectionCache.getCollection(CampaignSettlementDisplayBuildingIds.KEY, CampaignSettlementDisplayBuildingIds.Entry);
      return collection.find(entry => entry.key === this._displayBuildingKey);
    }
    
    get constructionType(): CampaignSettlementDisplayBuildingConstructionEnums.Entry | undefined {
      const collection = <CampaignSettlementDisplayBuildingConstructionEnums.Entry[]>this.collectionCache.getCollection(CampaignSettlementDisplayBuildingConstructionEnums.KEY, CampaignSettlementDisplayBuildingConstructionEnums.Entry);
      return collection.find(entry => entry.type === this._constructionType);
    }
  }
}

export default CampaignSettlementDisplayBuildingConstructions;
