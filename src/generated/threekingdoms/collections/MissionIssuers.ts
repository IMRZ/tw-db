
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MissionIssuers {
  export const KEY = new CollectionKey("mission_issuers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly issuerKey: string;
    readonly defaultRoundsBetween: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.issuerKey = values["issuer_key"];
      this.defaultRoundsBetween = values["default_rounds_between"];
    }
    
  }
}

export default MissionIssuers;
