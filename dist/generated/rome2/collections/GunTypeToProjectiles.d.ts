import { CollectionCache, CollectionKey } from "../../../common";
import { GunTypes } from "./GunTypes";
import { Projectiles } from "./Projectiles";
import { GunTypeMuzzleFlashEnum } from "./GunTypeMuzzleFlashEnum";
export declare namespace GunTypeToProjectiles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _gunType: string;
        readonly _shotType: string;
        readonly _muzzleFlash: string;
        constructor(collectionCache: CollectionCache, values: any);
        get gunType(): GunTypes.Entry | undefined;
        get shotType(): Projectiles.Entry | undefined;
        get muzzleFlash(): GunTypeMuzzleFlashEnum.Entry | undefined;
    }
}
export default GunTypeToProjectiles;
