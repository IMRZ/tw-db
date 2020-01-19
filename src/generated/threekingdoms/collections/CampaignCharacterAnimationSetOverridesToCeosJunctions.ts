
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignCharacterAnimationSetOverrides } from "./CampaignCharacterAnimationSetOverrides";
import { Ceos } from "./Ceos";
import { CampaignAnimSetEnums } from "./CampaignAnimSetEnums";

export namespace CampaignCharacterAnimationSetOverridesToCeosJunctions {
  export const KEY = new CollectionKey("campaign_character_animation_set_overrides_to_ceos_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _animationSetOverride: string;
    readonly _ceo: string;
    readonly _animSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._animationSetOverride = values["animation_set_override"];
      this._ceo = values["ceo"];
      this._animSet = values["anim_set"];
    }
    
    get animationSetOverride(): CampaignCharacterAnimationSetOverrides.Entry | undefined {
      const collection = <CampaignCharacterAnimationSetOverrides.Entry[]>this.collectionCache.getCollection(CampaignCharacterAnimationSetOverrides.KEY, CampaignCharacterAnimationSetOverrides.Entry);
      return collection.find(entry => entry.key === this._animationSetOverride);
    }
    
    get ceo(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._ceo);
    }
    
    get animSet(): CampaignAnimSetEnums.Entry | undefined {
      const collection = <CampaignAnimSetEnums.Entry[]>this.collectionCache.getCollection(CampaignAnimSetEnums.KEY, CampaignAnimSetEnums.Entry);
      return collection.find(entry => entry.name === this._animSet);
    }
  }
}

export default CampaignCharacterAnimationSetOverridesToCeosJunctions;
