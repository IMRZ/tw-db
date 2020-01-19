
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignUnitStatBonusTypes {
  export const KEY = new CollectionKey("campaign_unit_stat_bonus_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignUnitStatBonusTypes;
