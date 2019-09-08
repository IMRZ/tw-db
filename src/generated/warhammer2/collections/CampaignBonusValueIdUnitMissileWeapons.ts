
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignBonusValueIdUnitMissileWeapons {
  export const KEY = new CollectionKey("campaign_bonus_value_id_unit_missile_weapons");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default CampaignBonusValueIdUnitMissileWeapons;
