
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignBonusValueBattleContextTerritoryStatus {
  export const KEY = new CollectionKey("campaign_bonus_value_battle_context_territory_status");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignBonusValueBattleContextTerritoryStatus;
