
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAnimSetEnums } from "./CampaignAnimSetEnums";
import { CampaignCharacterAnimationSetOverrides } from "./CampaignCharacterAnimationSetOverrides";
import { ParticleEffects } from "./ParticleEffects";

export namespace CampaignCharacterAnimationSets {
  export const KEY = new CollectionKey("campaign_character_animation_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _defaultAnimSet: string;
    readonly _animSetOverrides: string;
    readonly _dismemberedLimbBloodTrailVfx: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._defaultAnimSet = values["default_anim_set"];
      this._animSetOverrides = values["anim_set_overrides"];
      this._dismemberedLimbBloodTrailVfx = values["dismembered_limb_blood_trail_vfx"];
    }
    
    get defaultAnimSet(): CampaignAnimSetEnums.Entry | undefined {
      const collection = <CampaignAnimSetEnums.Entry[]>this.collectionCache.getCollection(CampaignAnimSetEnums.KEY, CampaignAnimSetEnums.Entry);
      return collection.find(entry => entry.name === this._defaultAnimSet);
    }
    
    get animSetOverrides(): CampaignCharacterAnimationSetOverrides.Entry | undefined {
      const collection = <CampaignCharacterAnimationSetOverrides.Entry[]>this.collectionCache.getCollection(CampaignCharacterAnimationSetOverrides.KEY, CampaignCharacterAnimationSetOverrides.Entry);
      return collection.find(entry => entry.key === this._animSetOverrides);
    }
    
    get dismemberedLimbBloodTrailVfx(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._dismemberedLimbBloodTrailVfx);
    }
  }
}

export default CampaignCharacterAnimationSets;
