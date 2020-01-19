
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TaxesLevels {
  export const KEY = new CollectionKey("taxes_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly taxLevel: string;
    readonly percentage: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.taxLevel = values["tax_level"];
      this.percentage = values["percentage"];
    }
    
  }
}

export default TaxesLevels;
