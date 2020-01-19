
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsWorldPowerTokenRecords } from "./CampaignBonusValueIdsWorldPowerTokenRecords";
import { WorldPowerTokens } from "./WorldPowerTokens";

export namespace EffectBonusValueIdsWorldPowerTokenRecords {
  export const KEY = new CollectionKey("effect_bonus_value_ids_world_power_token_records");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _worldPowerTokenRecord: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._worldPowerTokenRecord = values["world_power_token_record"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsWorldPowerTokenRecords.Entry | undefined {
      const collection = <CampaignBonusValueIdsWorldPowerTokenRecords.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsWorldPowerTokenRecords.KEY, CampaignBonusValueIdsWorldPowerTokenRecords.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get worldPowerTokenRecord(): WorldPowerTokens.Entry | undefined {
      const collection = <WorldPowerTokens.Entry[]>this.collectionCache.getCollection(WorldPowerTokens.KEY, WorldPowerTokens.Entry);
      return collection.find(entry => entry.id === this._worldPowerTokenRecord);
    }
  }
}

export default EffectBonusValueIdsWorldPowerTokenRecords;
