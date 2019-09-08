
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CommodityUnitNames {
  export const KEY = new CollectionKey("commodity_unit_names");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly unit: string;
    readonly plural: string;
    readonly singular: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.unit = values["unit"];
      this.plural = values["plural"];
      this.singular = values["singular"];
    }
    
  }
}

export default CommodityUnitNames;
