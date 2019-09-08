
import { CollectionCache, CollectionKey } from "../../../common";


export namespace DiplomacyComponents {
  export const KEY = new CollectionKey("diplomacy_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly component: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.component = values["component"];
    }
    
  }
}

export default DiplomacyComponents;
