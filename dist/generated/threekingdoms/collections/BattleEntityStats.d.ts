import { CollectionCache, CollectionKey } from "../../../common";
import { MeleeWeapons } from "./MeleeWeapons";
import { MissileWeapons } from "./MissileWeapons";
export declare namespace BattleEntityStats {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _primaryMeleeWeapon: string;
        readonly _primaryMissileWeapon: string;
        constructor(collectionCache: CollectionCache, values: any);
        get primaryMeleeWeapon(): MeleeWeapons.Entry | undefined;
        get primaryMissileWeapon(): MissileWeapons.Entry | undefined;
    }
}
export default BattleEntityStats;
