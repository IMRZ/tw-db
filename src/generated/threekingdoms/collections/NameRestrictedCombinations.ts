
import { CollectionCache, CollectionKey } from "../../../common";
import { Names } from "./Names";

export namespace NameRestrictedCombinations {
  export const KEY = new CollectionKey("name_restricted_combinations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _foundName: number;
    readonly _restrictedCombination: number;
    readonly _replaceFoundNameWith: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._foundName = values["found_name"];
      this._restrictedCombination = values["restricted_combination"];
      this._replaceFoundNameWith = values["replace_found_name_with"];
    }
    
    get foundName(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._foundName);
    }
    
    get restrictedCombination(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._restrictedCombination);
    }
    
    get replaceFoundNameWith(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._replaceFoundNameWith);
    }
  }
}

export default NameRestrictedCombinations;
