
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdUnitMissileWeapons } from "./CampaignBonusValueIdUnitMissileWeapons";
import { UnitMissileWeaponJunctions } from "./UnitMissileWeaponJunctions";

export namespace EffectBonusValueMissileWeaponJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_missile_weapon_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _missileWeaponJunction: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._missileWeaponJunction = values["missile_weapon_junction"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdUnitMissileWeapons.Entry | undefined {
      const collection = <CampaignBonusValueIdUnitMissileWeapons.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdUnitMissileWeapons.KEY, CampaignBonusValueIdUnitMissileWeapons.Entry);
      return collection.find(entry => entry.id === this._bonusValueId);
    }
    
    get missileWeaponJunction(): UnitMissileWeaponJunctions.Entry | undefined {
      const collection = <UnitMissileWeaponJunctions.Entry[]>this.collectionCache.getCollection(UnitMissileWeaponJunctions.KEY, UnitMissileWeaponJunctions.Entry);
      return collection.find(entry => entry.id === this._missileWeaponJunction);
    }
  }
}

export default EffectBonusValueMissileWeaponJunctions;
