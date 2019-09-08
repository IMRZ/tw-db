
import { CollectionCache, CollectionKey } from "../../../common";
import { GovernmentTypes } from "./GovernmentTypes";

export namespace MinisterialEffectivenessModifiers {
  export const KEY = new CollectionKey("ministerial_effectiveness_modifiers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly leaderMinisterLevel: number;
    readonly _governmentType: string;
    readonly effectivenessBonus: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.leaderMinisterLevel = values["leader_minister_level"];
      this._governmentType = values["government_type"];
      this.effectivenessBonus = values["effectiveness_bonus"];
    }
    
    get governmentType(): GovernmentTypes.Entry | undefined {
      const collection = <GovernmentTypes.Entry[]>this.collectionCache.getCollection(GovernmentTypes.KEY, GovernmentTypes.Entry);
      return collection.find(entry => entry.governmentType === this._governmentType);
    }
  }
}

export default MinisterialEffectivenessModifiers;
