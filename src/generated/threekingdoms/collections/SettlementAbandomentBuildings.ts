
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { CampaignGroups } from "./CampaignGroups";

export namespace SettlementAbandomentBuildings {
  export const KEY = new CollectionKey("settlement_abandoment_buildings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _building: string;
    readonly _campaignGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._building = values["building"];
      this._campaignGroup = values["campaign_group"];
    }
    
    get building(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._building);
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
  }
}

export default SettlementAbandomentBuildings;
