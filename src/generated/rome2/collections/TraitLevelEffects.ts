
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterTraitLevels } from "./CharacterTraitLevels";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";

export namespace TraitLevelEffects {
  export const KEY = new CollectionKey("trait_level_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _traitLevel: string;
    readonly _effect: string;
    readonly value: number;
    readonly _effectScope: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._traitLevel = values["trait_level"];
      this._effect = values["effect"];
      this.value = values["value"];
      this._effectScope = values["effect_scope"];
    }
    
    get traitLevel(): CharacterTraitLevels.Entry | undefined {
      const collection = <CharacterTraitLevels.Entry[]>this.collectionCache.getCollection(CharacterTraitLevels.KEY, CharacterTraitLevels.Entry);
      return collection.find(entry => entry.key === this._traitLevel);
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get effectScope(): CampaignEffectScopes.Entry | undefined {
      const collection = <CampaignEffectScopes.Entry[]>this.collectionCache.getCollection(CampaignEffectScopes.KEY, CampaignEffectScopes.Entry);
      return collection.find(entry => entry.key === this._effectScope);
    }
  }
}

export default TraitLevelEffects;
