
import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";

export namespace BattleMiscEffects {
  export const KEY = new CollectionKey("battle_misc_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly _effect: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this._effect = values["effect"];
    }
    
    get effect(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._effect);
    }
  }
}

export default BattleMiscEffects;
