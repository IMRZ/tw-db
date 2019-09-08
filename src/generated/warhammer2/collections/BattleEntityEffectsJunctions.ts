
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleEntityEffects } from "./BattleEntityEffects";
import { ParticleEffects } from "./ParticleEffects";

export namespace BattleEntityEffectsJunctions {
  export const KEY = new CollectionKey("battle_entity_effects_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _walkDust: string;
    readonly _runDust: string;
    readonly _impactDust: string;
    readonly _meleeDust: string;
    readonly _footsteps: string;
    readonly _bloodSpurtSmall: string;
    readonly _bloodSpurtMedium: string;
    readonly _bloodSpurtLarge: string;
    readonly _bloodExplosion: string;
    readonly bloodSpurtLargeDecal: string;
    readonly _bloodExplosionDecal: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._walkDust = values["walk_dust"];
      this._runDust = values["run_dust"];
      this._impactDust = values["impact_dust"];
      this._meleeDust = values["melee_dust"];
      this._footsteps = values["footsteps"];
      this._bloodSpurtSmall = values["blood_spurt_small"];
      this._bloodSpurtMedium = values["blood_spurt_medium"];
      this._bloodSpurtLarge = values["blood_spurt_large"];
      this._bloodExplosion = values["blood_explosion"];
      this.bloodSpurtLargeDecal = values["blood_spurt_large_decal"];
      this._bloodExplosionDecal = values["blood_explosion_decal"];
    }
    
    get walkDust(): BattleEntityEffects.Entry | undefined {
      const collection = <BattleEntityEffects.Entry[]>this.collectionCache.getCollection(BattleEntityEffects.KEY, BattleEntityEffects.Entry);
      return collection.find(entry => entry.name === this._walkDust);
    }
    
    get runDust(): BattleEntityEffects.Entry | undefined {
      const collection = <BattleEntityEffects.Entry[]>this.collectionCache.getCollection(BattleEntityEffects.KEY, BattleEntityEffects.Entry);
      return collection.find(entry => entry.name === this._runDust);
    }
    
    get impactDust(): BattleEntityEffects.Entry | undefined {
      const collection = <BattleEntityEffects.Entry[]>this.collectionCache.getCollection(BattleEntityEffects.KEY, BattleEntityEffects.Entry);
      return collection.find(entry => entry.name === this._impactDust);
    }
    
    get meleeDust(): BattleEntityEffects.Entry | undefined {
      const collection = <BattleEntityEffects.Entry[]>this.collectionCache.getCollection(BattleEntityEffects.KEY, BattleEntityEffects.Entry);
      return collection.find(entry => entry.name === this._meleeDust);
    }
    
    get footsteps(): BattleEntityEffects.Entry | undefined {
      const collection = <BattleEntityEffects.Entry[]>this.collectionCache.getCollection(BattleEntityEffects.KEY, BattleEntityEffects.Entry);
      return collection.find(entry => entry.name === this._footsteps);
    }
    
    get bloodSpurtSmall(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._bloodSpurtSmall);
    }
    
    get bloodSpurtMedium(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._bloodSpurtMedium);
    }
    
    get bloodSpurtLarge(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._bloodSpurtLarge);
    }
    
    get bloodExplosion(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._bloodExplosion);
    }
    
    get bloodExplosionDecal(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._bloodExplosionDecal);
    }
  }
}

export default BattleEntityEffectsJunctions;
