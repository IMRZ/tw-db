
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TraitInfo {
  export const KEY = new CollectionKey("trait_info");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly trait: string;
    readonly applicableTo: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.trait = values["trait"];
      this.applicableTo = values["applicable_to"];
    }
    
  }
}

export default TraitInfo;
