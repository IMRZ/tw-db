
import { CollectionCache, CollectionKey } from "../../../common";
import { TaxesClasses } from "./TaxesClasses";
import { TaxesLevels } from "./TaxesLevels";

export namespace TaxesKeys {
  export const KEY = new CollectionKey("taxes_keys");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _taxClass: string;
    readonly _taxLevel: string;
    readonly taxLookup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._taxClass = values["tax_class"];
      this._taxLevel = values["tax_level"];
      this.taxLookup = values["tax_lookup"];
    }
    
    get taxClass(): TaxesClasses.Entry | undefined {
      const collection = <TaxesClasses.Entry[]>this.collectionCache.getCollection(TaxesClasses.KEY, TaxesClasses.Entry);
      return collection.find(entry => entry.tax === this._taxClass);
    }
    
    get taxLevel(): TaxesLevels.Entry | undefined {
      const collection = <TaxesLevels.Entry[]>this.collectionCache.getCollection(TaxesLevels.KEY, TaxesLevels.Entry);
      return collection.find(entry => entry.taxLevel === this._taxLevel);
    }
  }
}

export default TaxesKeys;
