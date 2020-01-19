
import { CollectionCache, CollectionKey } from "../../../common";
import { Rituals } from "./Rituals";
import { RitualPerformingCharacters } from "./RitualPerformingCharacters";

export namespace RitualPerformingCharacterJunctions {
  export const KEY = new CollectionKey("ritual_performing_character_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ritual: string;
    readonly _character: string;
    readonly amount: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ritual = values["ritual"];
      this._character = values["character"];
      this.amount = values["amount"];
    }
    
    get ritual(): Rituals.Entry | undefined {
      const collection = <Rituals.Entry[]>this.collectionCache.getCollection(Rituals.KEY, Rituals.Entry);
      return collection.find(entry => entry.key === this._ritual);
    }
    
    get character(): RitualPerformingCharacters.Entry | undefined {
      const collection = <RitualPerformingCharacters.Entry[]>this.collectionCache.getCollection(RitualPerformingCharacters.KEY, RitualPerformingCharacters.Entry);
      return collection.find(entry => entry.key === this._character);
    }
  }
}

export default RitualPerformingCharacterJunctions;
