
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignBonusValueIdsBattleContextUnitAttributes {
  export const KEY = new CollectionKey("campaign_bonus_value_ids_battle_context_unit_attributes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignBonusValueIdsBattleContextUnitAttributes;
