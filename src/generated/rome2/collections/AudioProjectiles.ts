
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioProjectilesEnums } from "./AudioProjectilesEnums";

export namespace AudioProjectiles {
  export const KEY = new CollectionKey("audio_projectiles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _audioProjectileType: string;
    readonly playIncomingSound: boolean;
    readonly maxAttenuationFire: number;
    readonly maxAttenuationInflight: number;
    readonly maxAttenuationImpact: number;
    readonly requiresSpeed: boolean;
    readonly requiresDistance: boolean;
    readonly inflightMinSpeed: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._audioProjectileType = values["audio_projectile_type"];
      this.playIncomingSound = !!values["play_incoming_sound"];
      this.maxAttenuationFire = values["max_attenuation_fire"];
      this.maxAttenuationInflight = values["max_attenuation_inflight"];
      this.maxAttenuationImpact = values["max_attenuation_impact"];
      this.requiresSpeed = !!values["requires_speed"];
      this.requiresDistance = !!values["requires_distance"];
      this.inflightMinSpeed = values["inflight_min_speed"];
    }
    
    get audioProjectileType(): AudioProjectilesEnums.Entry | undefined {
      const collection = <AudioProjectilesEnums.Entry[]>this.collectionCache.getCollection(AudioProjectilesEnums.KEY, AudioProjectilesEnums.Entry);
      return collection.find(entry => entry.key === this._audioProjectileType);
    }
  }
}

export default AudioProjectiles;
