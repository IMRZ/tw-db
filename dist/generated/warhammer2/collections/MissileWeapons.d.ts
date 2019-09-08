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
        readonly defaultProjectile: Projectiles.Entry | undefined;
        readonly audioType: AudioMissileWeaponTypes.Entry | undefined;
    }
}
export default MissileWeapons;
