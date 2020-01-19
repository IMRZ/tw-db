
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterAttributeTypes } from "./CharacterAttributeTypes";
import { CharacterAttributeSets } from "./CharacterAttributeSets";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";

export namespace CharacterAttributeEffects {
  export const KEY = new CollectionKey("character_attribute_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _type: string;
    readonly _setFilter: string;
    readonly value: number;
    readonly _effectKey: string;
    readonly _effectScope: string;
    readonly effectValue: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._type = values["type"];
      this._setFilter = values["set_filter"];
      this.value = values["value"];
      this._effectKey = values["effect_key"];
      this._effectScope = values["effect_scope"];
      this.effectValue = values["effect_value"];
    }
    
    get type(): CharacterAttributeTypes.Entry | undefined {
      const collection = <CharacterAttributeTypes.Entry[]>this.collectionCache.getCollection(CharacterAttributeTypes.KEY, CharacterAttributeTypes.Entry);
      return collection.find(entry => entry.type === this._type);
    }
    
    get setFilter(): CharacterAttributeSets.Entry | undefined {
      const collection = <CharacterAttributeSets.Entry[]>this.collectionCache.getCollection(CharacterAttributeSets.KEY, CharacterAttributeSets.Entry);
      return collection.find(entry => entry.setName === this._setFilter);
    }
    
    get effectKey(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effectKey);
    }
    
    get effectScope(): CampaignEffectScopes.Entry | undefined {
      const collection = <CampaignEffectScopes.Entry[]>this.collectionCache.getCollection(CampaignEffectScopes.KEY, CampaignEffectScopes.Entry);
      return collection.find(entry => entry.key === this._effectScope);
    }
  }
}

export default CharacterAttributeEffects;
