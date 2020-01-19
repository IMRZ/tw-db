
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBonusValueBattleContextSpecifiers } from "./CampaignBonusValueBattleContextSpecifiers";
import { CampaignBonusValueBattleContextTerritoryStatus } from "./CampaignBonusValueBattleContextTerritoryStatus";

export namespace CampaignBonusValueBattleContextTerritoryStatusJunctions {
  export const KEY = new CollectionKey("campaign_bonus_value_battle_context_territory_status_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _battleContextKey: string;
    readonly _territoryStatusKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._battleContextKey = values["battle_context_key"];
      this._territoryStatusKey = values["territory_status_key"];
    }
    
    get battleContextKey(): CampaignBonusValueBattleContextSpecifiers.Entry | undefined {
      const collection = <CampaignBonusValueBattleContextSpecifiers.Entry[]>this.collectionCache.getCollection(CampaignBonusValueBattleContextSpecifiers.KEY, CampaignBonusValueBattleContextSpecifiers.Entry);
      return collection.find(entry => entry.key === this._battleContextKey);
    }
    
    get territoryStatusKey(): CampaignBonusValueBattleContextTerritoryStatus.Entry | undefined {
      const collection = <CampaignBonusValueBattleContextTerritoryStatus.Entry[]>this.collectionCache.getCollection(CampaignBonusValueBattleContextTerritoryStatus.KEY, CampaignBonusValueBattleContextTerritoryStatus.Entry);
      return collection.find(entry => entry.key === this._territoryStatusKey);
    }
  }
}

export default CampaignBonusValueBattleContextTerritoryStatusJunctions;
