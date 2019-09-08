
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBonusValueBattleContextSpecifiers } from "./CampaignBonusValueBattleContextSpecifiers";
import { CampaignGroundTypes } from "./CampaignGroundTypes";

export namespace CampaignBonusValueBattleContextGroundTypeJunctions {
  export const KEY = new CollectionKey("campaign_bonus_value_battle_context_ground_type_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _battleContextKey: string;
    readonly _groundTypeKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._battleContextKey = values["battle_context_key"];
      this._groundTypeKey = values["ground_type_key"];
    }
    
    get battleContextKey(): CampaignBonusValueBattleContextSpecifiers.Entry | undefined {
      const collection = <CampaignBonusValueBattleContextSpecifiers.Entry[]>this.collectionCache.getCollection(CampaignBonusValueBattleContextSpecifiers.KEY, CampaignBonusValueBattleContextSpecifiers.Entry);
      return collection.find(entry => entry.key === this._battleContextKey);
    }
    
    get groundTypeKey(): CampaignGroundTypes.Entry | undefined {
      const collection = <CampaignGroundTypes.Entry[]>this.collectionCache.getCollection(CampaignGroundTypes.KEY, CampaignGroundTypes.Entry);
      return collection.find(entry => entry.type === this._groundTypeKey);
    }
  }
}

export default CampaignBonusValueBattleContextGroundTypeJunctions;
