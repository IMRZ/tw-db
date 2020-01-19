
import { CollectionCache, CollectionKey } from "../../../common";
import { TechnologyCategories } from "./TechnologyCategories";

export namespace TechnologyCategoryParents {
  export const KEY = new CollectionKey("technology_category_parents");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _parentCategory: string;
    readonly _childCategory: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._parentCategory = values["parent_category"];
      this._childCategory = values["child_category"];
    }
    
    get parentCategory(): TechnologyCategories.Entry | undefined {
      const collection = <TechnologyCategories.Entry[]>this.collectionCache.getCollection(TechnologyCategories.KEY, TechnologyCategories.Entry);
      return collection.find(entry => entry.key === this._parentCategory);
    }
    
    get childCategory(): TechnologyCategories.Entry | undefined {
      const collection = <TechnologyCategories.Entry[]>this.collectionCache.getCollection(TechnologyCategories.KEY, TechnologyCategories.Entry);
      return collection.find(entry => entry.key === this._childCategory);
    }
  }
}

export default TechnologyCategoryParents;
