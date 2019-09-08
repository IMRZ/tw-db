
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignBonusValueIdsMilitaryForceAbilitys {
  export const KEY = new CollectionKey("campaign_bonus_value_ids_military_force_abilitys");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly note: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.note = values["note"];
    }
    
  }
}

export default CampaignBonusValueIdsMilitaryForceAbilitys;
