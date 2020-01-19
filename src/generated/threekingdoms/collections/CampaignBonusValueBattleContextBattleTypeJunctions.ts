
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBonusValueBattleContextSpecifiers } from "./CampaignBonusValueBattleContextSpecifiers";
import { CampaignBattleTypeEnums } from "./CampaignBattleTypeEnums";

export namespace CampaignBonusValueBattleContextBattleTypeJunctions {
  export const KEY = new CollectionKey("campaign_bonus_value_battle_context_battle_type_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _battleContextKey: string;
    readonly _battleTypeKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._battleContextKey = values["battle_context_key"];
      this._battleTypeKey = values["battle_type_key"];
    }
    
    get battleContextKey(): CampaignBonusValueBattleContextSpecifiers.Entry | undefined {
      const collection = <CampaignBonusValueBattleContextSpecifiers.Entry[]>this.collectionCache.getCollection(CampaignBonusValueBattleContextSpecifiers.KEY, CampaignBonusValueBattleContextSpecifiers.Entry);
      return collection.find(entry => entry.key === this._battleContextKey);
    }
    
    get battleTypeKey(): CampaignBattleTypeEnums.Entry | undefined {
      const collection = <CampaignBattleTypeEnums.Entry[]>this.collectionCache.getCollection(CampaignBattleTypeEnums.KEY, CampaignBattleTypeEnums.Entry);
      return collection.find(entry => entry.key === this._battleTypeKey);
    }
  }
}

export default CampaignBonusValueBattleContextBattleTypeJunctions;
