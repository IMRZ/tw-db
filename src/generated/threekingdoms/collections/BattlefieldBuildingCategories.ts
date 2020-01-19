
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattlefieldBuildingCategories {
  export const KEY = new CollectionKey("battlefield_building_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly category: string;
    readonly _defaultDestructionEffect: any;
    readonly iconPath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.category = values["category"];
      this._defaultDestructionEffect = values["default_destruction_effect"];
      this.iconPath = values["icon_path"];
    }
    
  }
}

export default BattlefieldBuildingCategories;
