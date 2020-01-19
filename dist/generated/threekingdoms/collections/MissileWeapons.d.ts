import { CollectionCache, CollectionKey } from "../../../common";
import { Projectiles } from "./Projectiles";
import { AudioMissileWeaponTypes } from "./AudioMissileWeaponTypes";
export declare namespace MissileWeapons {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly precursor: boolean;
        readonly _defaultProjectile: string;
        readonly _audioType: string;
        readonly useSecondaryAmmoPool: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get defaultProjectile(): Projectiles.Entry | undefined;
        get audioType(): AudioMissileWeaponTypes.Entry | undefined;
    }
}
export default MissileWeapons;
