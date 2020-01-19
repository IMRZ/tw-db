
import { CollectionCache, CollectionKey } from "../../../common";


export namespace DeployablesCategories {
  export const KEY = new CollectionKey("deployables_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly deployableCategory: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.deployableCategory = values["deployable_category"];
    }
    
  }
}

export default DeployablesCategories;
