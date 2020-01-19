
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationshipTriggers } from "./CharacterRelationshipTriggers";
import { CharacterRelationshipEffects } from "./CharacterRelationshipEffects";

export namespace CharacterRelationshipTriggerEffects {
  export const KEY = new CollectionKey("character_relationship_trigger_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _trigger: string;
    readonly _effect: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._trigger = values["trigger"];
      this._effect = values["effect"];
    }
    
    get trigger(): CharacterRelationshipTriggers.Entry | undefined {
      const collection = <CharacterRelationshipTriggers.Entry[]>this.collectionCache.getCollection(CharacterRelationshipTriggers.KEY, CharacterRelationshipTriggers.Entry);
      return collection.find(entry => entry.key === this._trigger);
    }
    
    get effect(): CharacterRelationshipEffects.Entry | undefined {
      const collection = <CharacterRelationshipEffects.Entry[]>this.collectionCache.getCollection(CharacterRelationshipEffects.KEY, CharacterRelationshipEffects.Entry);
      return collection.find(entry => entry.key === this._effect);
    }
  }
}

export default CharacterRelationshipTriggerEffects;
