
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationshipSituationEffectSets } from "./CharacterRelationshipSituationEffectSets";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";

export namespace CharacterRelationshipSituationEffectSetEffects {
  export const KEY = new CollectionKey("character_relationship_situation_effect_set_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effectSet: string;
    readonly _effect: string;
    readonly _scope: string;
    readonly value: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effectSet = values["effect_set"];
      this._effect = values["effect"];
      this._scope = values["scope"];
      this.value = values["value"];
    }
    
    get effectSet(): CharacterRelationshipSituationEffectSets.Entry | undefined {
      const collection = <CharacterRelationshipSituationEffectSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipSituationEffectSets.KEY, CharacterRelationshipSituationEffectSets.Entry);
      return collection.find(entry => entry.key === this._effectSet);
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get scope(): CampaignEffectScopes.Entry | undefined {
      const collection = <CampaignEffectScopes.Entry[]>this.collectionCache.getCollection(CampaignEffectScopes.KEY, CampaignEffectScopes.Entry);
      return collection.find(entry => entry.key === this._scope);
    }
  }
}

export default CharacterRelationshipSituationEffectSetEffects;
