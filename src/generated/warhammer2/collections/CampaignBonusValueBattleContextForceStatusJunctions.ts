
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBonusValueBattleContextSpecifiers } from "./CampaignBonusValueBattleContextSpecifiers";
import { CampaignBonusValueBattleContextForceStatus } from "./CampaignBonusValueBattleContextForceStatus";

export namespace CampaignBonusValueBattleContextForceStatusJunctions {
  export const KEY = new CollectionKey("campaign_bonus_value_battle_context_force_status_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _battleContextKey: string;
    readonly _forceStatusKey: string;
    readonly isYours: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._battleContextKey = values["battle_context_key"];
      this._forceStatusKey = values["force_status_key"];
      this.isYours = !!values["is_yours"];
    }
    
    get battleContextKey(): CampaignBonusValueBattleContextSpecifiers.Entry | undefined {
      const collection = <CampaignBonusValueBattleContextSpecifiers.Entry[]>this.collectionCache.getCollection(CampaignBonusValueBattleContextSpecifiers.KEY, CampaignBonusValueBattleContextSpecifiers.Entry);
      return collection.find(entry => entry.key === this._battleContextKey);
    }
    
    get forceStatusKey(): CampaignBonusValueBattleContextForceStatus.Entry | undefined {
      const collection = <CampaignBonusValueBattleContextForceStatus.Entry[]>this.collectionCache.getCollection(CampaignBonusValueBattleContextForceStatus.KEY, CampaignBonusValueBattleContextForceStatus.Entry);
      return collection.find(entry => entry.key === this._forceStatusKey);
    }
  }
}

export default CampaignBonusValueBattleContextForceStatusJunctions;
