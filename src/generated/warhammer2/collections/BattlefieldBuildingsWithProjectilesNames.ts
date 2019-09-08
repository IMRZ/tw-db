
import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldBuildingCategories } from "./BattlefieldBuildingCategories";
import { Projectiles } from "./Projectiles";
import { BattlefieldBuildingsNames } from "./BattlefieldBuildingsNames";

export namespace BattlefieldBuildingsWithProjectilesNames {
  export const KEY = new CollectionKey("battlefield_buildings_with_projectiles_names");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _buildingCategory: string;
    readonly _projectile: string;
    readonly _name: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._buildingCategory = values["building_category"];
      this._projectile = values["projectile"];
      this._name = values["name"];
    }
    
    get buildingCategory(): BattlefieldBuildingCategories.Entry | undefined {
      const collection = <BattlefieldBuildingCategories.Entry[]>this.collectionCache.getCollection(BattlefieldBuildingCategories.KEY, BattlefieldBuildingCategories.Entry);
      return collection.find(entry => entry.category === this._buildingCategory);
    }
    
    get projectile(): Projectiles.Entry | undefined {
      const collection = <Projectiles.Entry[]>this.collectionCache.getCollection(Projectiles.KEY, Projectiles.Entry);
      return collection.find(entry => entry.key === this._projectile);
    }
    
    get name(): BattlefieldBuildingsNames.Entry | undefined {
      const collection = <BattlefieldBuildingsNames.Entry[]>this.collectionCache.getCollection(BattlefieldBuildingsNames.KEY, BattlefieldBuildingsNames.Entry);
      return collection.find(entry => entry.key === this._name);
    }
  }
}

export default BattlefieldBuildingsWithProjectilesNames;
