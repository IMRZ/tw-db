
import { CollectionCache, CollectionKey } from "../../../common";
import { Rituals } from "./Rituals";

export namespace SacrificesToSotekRituals {
  export const KEY = new CollectionKey("sacrifices_to_sotek_rituals");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ritual: string;
    readonly tier: number;
    readonly order: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ritual = values["ritual"];
      this.tier = values["tier"];
      this.order = values["order"];
    }
    
    get ritual(): Rituals.Entry | undefined {
      const collection = <Rituals.Entry[]>this.collectionCache.getCollection(Rituals.KEY, Rituals.Entry);
      return collection.find(entry => entry.key === this._ritual);
    }
  }
}

export default SacrificesToSotekRituals;
