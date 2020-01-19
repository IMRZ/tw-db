
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapAttritions } from "./CampaignMapAttritions";
import { MainUnits } from "./MainUnits";

export namespace CampaignMapAttritionUnitImmunities {
  export const KEY = new CollectionKey("campaign_map_attrition_unit_immunities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _attrition: string;
    readonly _unit: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._attrition = values["attrition"];
      this._unit = values["unit"];
    }
    
    get attrition(): CampaignMapAttritions.Entry | undefined {
      const collection = <CampaignMapAttritions.Entry[]>this.collectionCache.getCollection(CampaignMapAttritions.KEY, CampaignMapAttritions.Entry);
      return collection.find(entry => entry.key === this._attrition);
    }
    
    get unit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
  }
}

export default CampaignMapAttritionUnitImmunities;
