
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignBonusValueBattleContextSpecifiers {
  export const KEY = new CollectionKey("campaign_bonus_value_battle_context_specifiers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly nightBattlesOnly: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.nightBattlesOnly = !!values["night_battles_only"];
    }
    
  }
}

export default CampaignBonusValueBattleContextSpecifiers;
