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
        get buildingCategory(): BattlefieldBuildingCategories.Entry | undefined;
        get projectile(): Projectiles.Entry | undefined;
        get name(): BattlefieldBuildingsNames.Entry | undefined;
    }
}
export default BattlefieldBuildingsWithProjectilesNames;
