
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBattleTypeEnums } from "./CampaignBattleTypeEnums";
import { AutoresolverOptionalBoolEnums } from "./AutoresolverOptionalBoolEnums";

export namespace AutoresolverBattleTypes {
  export const KEY = new CollectionKey("autoresolver_battle_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _battleType: string;
    readonly _isNightBattle: string;
    readonly autoresolverStance: string;
    readonly _isEncampment: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._battleType = values["battle_type"];
      this._isNightBattle = values["is_night_battle"];
      this.autoresolverStance = values["autoresolver_stance"];
      this._isEncampment = values["is_encampment"];
    }
    
    get battleType(): CampaignBattleTypeEnums.Entry | undefined {
      const collection = <CampaignBattleTypeEnums.Entry[]>this.collectionCache.getCollection(CampaignBattleTypeEnums.KEY, CampaignBattleTypeEnums.Entry);
      return collection.find(entry => entry.key === this._battleType);
    }
    
    get isNightBattle(): AutoresolverOptionalBoolEnums.Entry | undefined {
      const collection = <AutoresolverOptionalBoolEnums.Entry[]>this.collectionCache.getCollection(AutoresolverOptionalBoolEnums.KEY, AutoresolverOptionalBoolEnums.Entry);
      return collection.find(entry => entry.key === this._isNightBattle);
    }
    
    get isEncampment(): AutoresolverOptionalBoolEnums.Entry | undefined {
      const collection = <AutoresolverOptionalBoolEnums.Entry[]>this.collectionCache.getCollection(AutoresolverOptionalBoolEnums.KEY, AutoresolverOptionalBoolEnums.Entry);
      return collection.find(entry => entry.key === this._isEncampment);
    }
  }
}

export default AutoresolverBattleTypes;
