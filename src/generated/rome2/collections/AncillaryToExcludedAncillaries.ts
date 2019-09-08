
import { CollectionCache, CollectionKey } from "../../../common";
import { AncillaryInfo } from "./AncillaryInfo";

export namespace AncillaryToExcludedAncillaries {
  export const KEY = new CollectionKey("ancillary_to_excluded_ancillaries");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ancillary: string;
    readonly _excludedAncillary: any;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ancillary = values["ancillary"];
      this._excludedAncillary = values["excluded_ancillary"];
    }
    
    get ancillary(): AncillaryInfo.Entry | undefined {
      const collection = <AncillaryInfo.Entry[]>this.collectionCache.getCollection(AncillaryInfo.KEY, AncillaryInfo.Entry);
      return collection.find(entry => entry.ancillary === this._ancillary);
    }
  }
}

export default AncillaryToExcludedAncillaries;
