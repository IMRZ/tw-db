
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignBonusValueIdsUnitCategory {
  export const KEY = new CollectionKey("campaign_bonus_value_ids_unit_category");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly notes: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.notes = values["notes"];
    }
    
  }
}

export default CampaignBonusValueIdsUnitCategory;
