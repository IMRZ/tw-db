import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldBuildingCategories } from "./BattlefieldBuildingCategories";
import { Projectiles } from "./Projectiles";
import { BattlefieldBuildingsNames } from "./BattlefieldBuildingsNames";
export declare namespace BattlefieldBuildingsWithProjectilesNames {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _buildingCategory: string;
        readonly _projectile: string;
        readonly _name: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly buildingCategory: BattlefieldBuildingCategories.Entry | undefined;
        readonly projectile: Projectiles.Entry | undefined;
        readonly name: BattlefieldBuildingsNames.Entry | undefined;
    }
}
export default BattlefieldBuildingsWithProjectilesNames;
