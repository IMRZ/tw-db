
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignRegionGdpCategories } from "./CampaignRegionGdpCategories";

export namespace CampaignRegionGdpTypes {
  export const KEY = new CollectionKey("campaign_region_gdp_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _category: string;
    readonly affectedByFertility: boolean;
    readonly affectedBySeaRegionControl: boolean;
    readonly contributesToLandRaidsAsTrade: boolean;
    readonly contributesToLandRaidsAsNonTrade: boolean;
    readonly contributesToSeaRaidsAsTrade: boolean;
    readonly onscreenName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._category = values["category"];
      this.affectedByFertility = !!values["affected_by_fertility"];
      this.affectedBySeaRegionControl = !!values["affected_by_sea_region_control"];
      this.contributesToLandRaidsAsTrade = !!values["contributes_to_land_raids_as_trade"];
      this.contributesToLandRaidsAsNonTrade = !!values["contributes_to_land_raids_as_non_trade"];
      this.contributesToSeaRaidsAsTrade = !!values["contributes_to_sea_raids_as_trade"];
      this.onscreenName = values["onscreen_name"];
    }
    
    get category(): CampaignRegionGdpCategories.Entry | undefined {
      const collection = <CampaignRegionGdpCategories.Entry[]>this.collectionCache.getCollection(CampaignRegionGdpCategories.KEY, CampaignRegionGdpCategories.Entry);
      return collection.find(entry => entry.category === this._category);
    }
  }
}

export default CampaignRegionGdpTypes;
