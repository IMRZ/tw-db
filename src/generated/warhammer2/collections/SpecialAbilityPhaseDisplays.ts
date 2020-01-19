
import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";
import { EntityVfxAttachTypes } from "./EntityVfxAttachTypes";

export namespace SpecialAbilityPhaseDisplays {
  export const KEY = new CollectionKey("special_ability_phase_displays");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _bannerVfx: string;
    readonly _activeVfx: string;
    readonly _entityVfx: string;
    readonly _entityVfxAttachType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._bannerVfx = values["banner_vfx"];
      this._activeVfx = values["active_vfx"];
      this._entityVfx = values["entity_vfx"];
      this._entityVfxAttachType = values["entity_vfx_attach_type"];
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
    
    get entityVfxAttachType(): EntityVfxAttachTypes.Entry | undefined {
      const collection = <EntityVfxAttachTypes.Entry[]>this.collectionCache.getCollection(EntityVfxAttachTypes.KEY, EntityVfxAttachTypes.Entry);
      return collection.find(entry => entry.attachType === this._entityVfxAttachType);
    }
  }
}

export default SpecialAbilityPhaseDisplays;
