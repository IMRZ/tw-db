
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MissionIssuers {
  export const KEY = new CollectionKey("mission_issuers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly issuerKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.issuerKey = values["issuer_key"];
    }
    
  }
}

export default MissionIssuers;
