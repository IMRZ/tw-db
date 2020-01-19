
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignBonusValueBattleContextForceStatus {
  export const KEY = new CollectionKey("campaign_bonus_value_battle_context_force_status");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignBonusValueBattleContextForceStatus;
