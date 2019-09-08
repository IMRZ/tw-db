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
        readonly gunType: GunTypes.Entry | undefined;
        readonly shotType: Projectiles.Entry | undefined;
        readonly muzzleFlash: GunTypeMuzzleFlashEnum.Entry | undefined;
    }
}
export default GunTypeToProjectiles;
