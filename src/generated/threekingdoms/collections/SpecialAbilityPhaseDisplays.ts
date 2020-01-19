
import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";

export namespace SpecialAbilityPhaseDisplays {
  export const KEY = new CollectionKey("special_ability_phase_displays");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _bannerVfx: string;
    readonly _activeVfx: string;
    readonly _entityVfx: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._bannerVfx = values["banner_vfx"];
      this._activeVfx = values["active_vfx"];
      this._entityVfx = values["entity_vfx"];
    }
    
    get bannerVfx(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._bannerVfx);
    }
    
    get activeVfx(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._activeVfx);
    }
    
    get entityVfx(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._entityVfx);
    }
  }
}

export default SpecialAbilityPhaseDisplays;
