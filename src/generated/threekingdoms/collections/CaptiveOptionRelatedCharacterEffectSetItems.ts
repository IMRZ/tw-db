
import { CollectionCache, CollectionKey } from "../../../common";
import { CaptiveOptionEffectSets } from "./CaptiveOptionEffectSets";
import { CaptiveOptionEffectScopes } from "./CaptiveOptionEffectScopes";
import { CharacterRelationships } from "./CharacterRelationships";
import { CaptiveOptionEffects } from "./CaptiveOptionEffects";

export namespace CaptiveOptionRelatedCharacterEffectSetItems {
  export const KEY = new CollectionKey("captive_option_related_character_effect_set_items");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effectSet: string;
    readonly _scope: string;
    readonly _relationship: string;
    readonly _effects: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effectSet = values["effect_set"];
      this._scope = values["scope"];
      this._relationship = values["relationship"];
      this._effects = values["effects"];
    }
    
    get effectSet(): CaptiveOptionEffectSets.Entry | undefined {
      const collection = <CaptiveOptionEffectSets.Entry[]>this.collectionCache.getCollection(CaptiveOptionEffectSets.KEY, CaptiveOptionEffectSets.Entry);
      return collection.find(entry => entry.key === this._effectSet);
    }
    
    get scope(): CaptiveOptionEffectScopes.Entry | undefined {
      const collection = <CaptiveOptionEffectScopes.Entry[]>this.collectionCache.getCollection(CaptiveOptionEffectScopes.KEY, CaptiveOptionEffectScopes.Entry);
      return collection.find(entry => entry.key === this._scope);
    }
    
    get relationship(): CharacterRelationships.Entry | undefined {
      const collection = <CharacterRelationships.Entry[]>this.collectionCache.getCollection(CharacterRelationships.KEY, CharacterRelationships.Entry);
      return collection.find(entry => entry.key === this._relationship);
    }
    
    get effects(): CaptiveOptionEffects.Entry | undefined {
      const collection = <CaptiveOptionEffects.Entry[]>this.collectionCache.getCollection(CaptiveOptionEffects.KEY, CaptiveOptionEffects.Entry);
      return collection.find(entry => entry.key === this._effects);
    }
  }
}

export default CaptiveOptionRelatedCharacterEffectSetItems;
