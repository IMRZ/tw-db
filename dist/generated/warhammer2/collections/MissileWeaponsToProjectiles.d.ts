import { CollectionCache, CollectionKey } from "../../../common";
import { MissileWeapons } from "./MissileWeapons";
import { Projectiles } from "./Projectiles";
export declare namespace MissileWeaponsToProjectiles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _missileWeapon: string;
        readonly _projectile: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly missileWeapon: MissileWeapons.Entry | undefined;
        readonly projectile: Projectiles.Entry | undefined;
    }
}
export default MissileWeaponsToProjectiles;
