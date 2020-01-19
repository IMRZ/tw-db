
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBonusValueBattleContextSpecifiers } from "./CampaignBonusValueBattleContextSpecifiers";
import { Factions } from "./Factions";

export namespace CampaignBonusValueBattleContextFactionJunctions {
  export const KEY = new CollectionKey("campaign_bonus_value_battle_context_faction_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _battleContextKey: string;
    readonly _factionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._battleContextKey = values["battle_context_key"];
      this._factionKey = values["faction_key"];
    }
    
    get battleContextKey(): CampaignBonusValueBattleContextSpecifiers.Entry | undefined {
      const collection = <CampaignBonusValueBattleContextSpecifiers.Entry[]>this.collectionCache.getCollection(CampaignBonusValueBattleContextSpecifiers.KEY, CampaignBonusValueBattleContextSpecifiers.Entry);
      return collection.find(entry => entry.key === this._battleContextKey);
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
  }
}

export default CampaignBonusValueBattleContextFactionJunctions;
