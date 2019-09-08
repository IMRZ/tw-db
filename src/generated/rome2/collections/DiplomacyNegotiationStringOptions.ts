
import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyKeys } from "./DiplomacyKeys";
import { Cultures } from "./Cultures";
import { GovernmentTypes } from "./GovernmentTypes";
import { DiplomacyStrings } from "./DiplomacyStrings";

export namespace DiplomacyNegotiationStringOptions {
  export const KEY = new CollectionKey("diplomacy_negotiation_string_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly _culture: string;
    readonly _governmentType: string;
    readonly _string: string;
    readonly option: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this._culture = values["culture"];
      this._governmentType = values["government_type"];
      this._string = values["string"];
      this.option = values["option"];
    }
    
    get key(): DiplomacyKeys.Entry | undefined {
      const collection = <DiplomacyKeys.Entry[]>this.collectionCache.getCollection(DiplomacyKeys.KEY, DiplomacyKeys.Entry);
      return collection.find(entry => entry.key === this._key);
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get governmentType(): GovernmentTypes.Entry | undefined {
      const collection = <GovernmentTypes.Entry[]>this.collectionCache.getCollection(GovernmentTypes.KEY, GovernmentTypes.Entry);
      return collection.find(entry => entry.governmentType === this._governmentType);
    }
    
    get string(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._string);
    }
  }
}

export default DiplomacyNegotiationStringOptions;
