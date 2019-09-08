
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSettlementDisplayBuildingIds } from "./CampaignSettlementDisplayBuildingIds";
import { CampaignSettlementDisplayBuildingsEnums } from "./CampaignSettlementDisplayBuildingsEnums";

export namespace CampaignSettlementDisplayBuildings {
  export const KEY = new CollectionKey("campaign_settlement_display_buildings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly _displayBuildingKey: string;
    readonly _state: string;
    readonly isSlum: boolean;
    readonly isSieged: boolean;
    readonly isBlockaded: boolean;
    readonly buildingPath: string;
    readonly destructionAdditionalModel: string;
    readonly destructionOverrideModel: string;
    readonly constructionAdditionalModel: string;
    readonly constructionOverrideModel: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._displayBuildingKey = values["display_building_key"];
      this._state = values["state"];
      this.isSlum = !!values["is_slum"];
      this.isSieged = !!values["is_sieged"];
      this.isBlockaded = !!values["is_blockaded"];
      this.buildingPath = values["building_path"];
      this.destructionAdditionalModel = values["destruction_additional_model"];
      this.destructionOverrideModel = values["destruction_override_model"];
      this.constructionAdditionalModel = values["construction_additional_model"];
      this.constructionOverrideModel = values["construction_override_model"];
    }
    
    get displayBuildingKey(): CampaignSettlementDisplayBuildingIds.Entry | undefined {
      const collection = <CampaignSettlementDisplayBuildingIds.Entry[]>this.collectionCache.getCollection(CampaignSettlementDisplayBuildingIds.KEY, CampaignSettlementDisplayBuildingIds.Entry);
      return collection.find(entry => entry.key === this._displayBuildingKey);
    }
    
    get state(): CampaignSettlementDisplayBuildingsEnums.Entry | undefined {
      const collection = <CampaignSettlementDisplayBuildingsEnums.Entry[]>this.collectionCache.getCollection(CampaignSettlementDisplayBuildingsEnums.KEY, CampaignSettlementDisplayBuildingsEnums.Entry);
      return collection.find(entry => entry.type === this._state);
    }
  }
}

export default CampaignSettlementDisplayBuildings;
