
import { CollectionCache, CollectionKey } from "../../../common";
import { Rituals } from "./Rituals";
import { RitualCategories } from "./RitualCategories";

export namespace RitualReactionConstraints {
  export const KEY = new CollectionKey("ritual_reaction_constraints");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ritual: string;
    readonly _targetRitual: string;
    readonly _targetCategory: string;
    readonly oncePerTarget: boolean;
    readonly sameSubcultureValid: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ritual = values["ritual"];
      this._targetRitual = values["target_ritual"];
      this._targetCategory = values["target_category"];
      this.oncePerTarget = !!values["once_per_target"];
      this.sameSubcultureValid = !!values["same_subculture_valid"];
    }
    
    get ritual(): Rituals.Entry | undefined {
      const collection = <Rituals.Entry[]>this.collectionCache.getCollection(Rituals.KEY, Rituals.Entry);
      return collection.find(entry => entry.key === this._ritual);
    }
    
    get targetRitual(): Rituals.Entry | undefined {
      const collection = <Rituals.Entry[]>this.collectionCache.getCollection(Rituals.KEY, Rituals.Entry);
      return collection.find(entry => entry.key === this._targetRitual);
    }
    
    get targetCategory(): RitualCategories.Entry | undefined {
      const collection = <RitualCategories.Entry[]>this.collectionCache.getCollection(RitualCategories.KEY, RitualCategories.Entry);
      return collection.find(entry => entry.id === this._targetCategory);
    }
  }
}

export default RitualReactionConstraints;
