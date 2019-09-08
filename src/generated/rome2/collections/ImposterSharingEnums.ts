
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ImposterSharingEnums {
  export const KEY = new CollectionKey("imposter_sharing_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default ImposterSharingEnums;
