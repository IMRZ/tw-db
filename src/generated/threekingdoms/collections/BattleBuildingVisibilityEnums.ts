
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleBuildingVisibilityEnums {
  export const KEY = new CollectionKey("battle_building_visibility_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default BattleBuildingVisibilityEnums;
