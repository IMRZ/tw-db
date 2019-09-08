import { CollectionCache, CollectionKey } from "../../../common";
import { Projectiles } from "./Projectiles";
export declare namespace MissileWeapons {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly precursor: boolean;
        readonly _defaultProjectile: string;
        readonly canFireAtBuildings: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly defaultProjectile: Projectiles.Entry | undefined;
    }
}
export default MissileWeapons;
