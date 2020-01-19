
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterAssignments } from "./CharacterAssignments";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";

export namespace CharacterAssignmentEffects {
  export const KEY = new CollectionKey("character_assignment_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _assignment: string;
    readonly _effect: string;
    readonly _scope: string;
    readonly value: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._assignment = values["assignment"];
      this._effect = values["effect"];
      this._scope = values["scope"];
      this.value = values["value"];
    }
    
    get assignment(): CharacterAssignments.Entry | undefined {
      const collection = <CharacterAssignments.Entry[]>this.collectionCache.getCollection(CharacterAssignments.KEY, CharacterAssignments.Entry);
      return collection.find(entry => entry.key === this._assignment);
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

export default CharacterAssignmentEffects;
