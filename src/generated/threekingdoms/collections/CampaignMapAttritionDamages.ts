
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignMapAttritionDamages {
  export const KEY = new CollectionKey("campaign_map_attrition_damages");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly percentUnitDamage: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.percentUnitDamage = values["percent_unit_damage"];
    }
    
  }
}

export default CampaignMapAttritionDamages;
