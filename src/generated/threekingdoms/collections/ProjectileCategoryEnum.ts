
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ProjectileCategoryEnum {
  export const KEY = new CollectionKey("projectile_category_enum");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default ProjectileCategoryEnum;
