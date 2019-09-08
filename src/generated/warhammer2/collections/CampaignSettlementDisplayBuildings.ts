
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSettlementDisplayBuildingModelIds } from "./CampaignSettlementDisplayBuildingModelIds";

export namespace CampaignSettlementDisplayBuildings {
  export const KEY = new CollectionKey("campaign_settlement_display_buildings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly _modelId: string;
    readonly buildingBmd: string;
    readonly portBmd: string;
    readonly constructionBmd: string;
    readonly damagedBmd: string;
    readonly destroyedBmd: string;
    readonly portConstructionBmd: string;
    readonly wallBmd: string;
    readonly portWalledBmd: string;
    readonly onSeaBmd: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._modelId = values["model_id"];
      this.buildingBmd = values["building_bmd"];
      this.portBmd = values["port_bmd"];
      this.constructionBmd = values["construction_bmd"];
      this.damagedBmd = values["damaged_bmd"];
      this.destroyedBmd = values["destroyed_bmd"];
      this.portConstructionBmd = values["port_construction_bmd"];
      this.wallBmd = values["wall_bmd"];
      this.portWalledBmd = values["port_walled_bmd"];
      this.onSeaBmd = values["on_sea_bmd"];
    }
    
    get modelId(): CampaignSettlementDisplayBuildingModelIds.Entry | undefined {
      const collection = <CampaignSettlementDisplayBuildingModelIds.Entry[]>this.collectionCache.getCollection(CampaignSettlementDisplayBuildingModelIds.KEY, CampaignSettlementDisplayBuildingModelIds.Entry);
      return collection.find(entry => entry.id === this._modelId);
    }
  }
}

export default CampaignSettlementDisplayBuildings;
