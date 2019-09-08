
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleSkeletonCategoryEnums {
  export const KEY = new CollectionKey("battle_skeleton_category_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
    }
    
  }
}

export default BattleSkeletonCategoryEnums;
