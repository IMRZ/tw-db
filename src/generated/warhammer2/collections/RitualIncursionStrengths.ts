
import { CollectionCache, CollectionKey } from "../../../common";
import { Rituals } from "./Rituals";

export namespace RitualIncursionStrengths {
  export const KEY = new CollectionKey("ritual_incursion_strengths");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ritual: string;
    readonly difficulty: number;
    readonly strength: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ritual = values["ritual"];
      this.difficulty = values["difficulty"];
      this.strength = values["strength"];
    }
    
    get ritual(): Rituals.Entry | undefined {
      const collection = <Rituals.Entry[]>this.collectionCache.getCollection(Rituals.KEY, Rituals.Entry);
      return collection.find(entry => entry.key === this._ritual);
    }
  }
}

export default RitualIncursionStrengths;
