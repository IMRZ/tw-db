
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AncillaryInfo {
  export const KEY = new CollectionKey("ancillary_info");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly ancillary: string;
    readonly historicalExample: string;
    readonly author: string;
    readonly comment: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.ancillary = values["ancillary"];
      this.historicalExample = values["historical_example"];
      this.author = values["author"];
      this.comment = values["comment"];
    }
    
  }
}

export default AncillaryInfo;
