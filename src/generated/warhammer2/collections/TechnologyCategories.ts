
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TechnologyCategories {
  export const KEY = new CollectionKey("technology_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly position: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.position = values["position"];
    }
    
  }
}

export default TechnologyCategories;
