
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";

export namespace StartPosNonCommandingGenerals {
  export const KEY = new CollectionKey("start_pos_non_commanding_generals");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _nonCommandingGeneral: number;
    readonly _generalCommandingForce: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._nonCommandingGeneral = values["non_commanding_general"];
      this._generalCommandingForce = values["general_commanding_force"];
    }
    
    get nonCommandingGeneral(): StartPosCharacters.Entry | undefined {
      const collection = <StartPosCharacters.Entry[]>this.collectionCache.getCollection(StartPosCharacters.KEY, StartPosCharacters.Entry);
      return collection.find(entry => entry.id === this._nonCommandingGeneral);
    }
    
    get generalCommandingForce(): StartPosCharacters.Entry | undefined {
      const collection = <StartPosCharacters.Entry[]>this.collectionCache.getCollection(StartPosCharacters.KEY, StartPosCharacters.Entry);
      return collection.find(entry => entry.id === this._generalCommandingForce);
    }
  }
}

export default StartPosNonCommandingGenerals;
