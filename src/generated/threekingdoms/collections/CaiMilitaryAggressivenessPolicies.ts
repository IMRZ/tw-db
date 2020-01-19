
import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyStrings } from "./DiplomacyStrings";

export namespace CaiMilitaryAggressivenessPolicies {
  export const KEY = new CollectionKey("cai_military_aggressiveness_policies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _shortDescription: string;
    readonly _longDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._shortDescription = values["short_description"];
      this._longDescription = values["long_description"];
    }
    
    get shortDescription(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._shortDescription);
    }
    
    get longDescription(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._longDescription);
    }
  }
}

export default CaiMilitaryAggressivenessPolicies;
