
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TaxesClasses {
  export const KEY = new CollectionKey("taxes_classes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly tax: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.tax = values["tax"];
    }
    
  }
}

export default TaxesClasses;
