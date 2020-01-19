
import { CollectionCache, CollectionKey } from "../../../common";
import { Ceos } from "./Ceos";

export namespace CeosToDuelOutcomeModifiers {
  export const KEY = new CollectionKey("ceos_to_duel_outcome_modifiers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ceoKey: string;
    readonly spareKillModifier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ceoKey = values["ceo_key"];
      this.spareKillModifier = values["spare_kill_modifier"];
    }
    
    get ceoKey(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._ceoKey);
    }
  }
}

export default CeosToDuelOutcomeModifiers;
