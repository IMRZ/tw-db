
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { Projectiles } from "./Projectiles";
import { CampaignBonusValueIdsProjectile } from "./CampaignBonusValueIdsProjectile";

export namespace EffectBonusValueProjectileJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_projectile_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _projectile: string;
    readonly _bonusValue: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._projectile = values["projectile"];
      this._bonusValue = values["bonus_value"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get projectile(): Projectiles.Entry | undefined {
      const collection = <Projectiles.Entry[]>this.collectionCache.getCollection(Projectiles.KEY, Projectiles.Entry);
      return collection.find(entry => entry.key === this._projectile);
    }
    
    get bonusValue(): CampaignBonusValueIdsProjectile.Entry | undefined {
      const collection = <CampaignBonusValueIdsProjectile.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsProjectile.KEY, CampaignBonusValueIdsProjectile.Entry);
      return collection.find(entry => entry.key === this._bonusValue);
    }
  }
}

export default EffectBonusValueProjectileJunctions;
