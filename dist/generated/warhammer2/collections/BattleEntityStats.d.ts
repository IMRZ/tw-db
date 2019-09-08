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
        readonly primaryMeleeWeapon: MeleeWeapons.Entry | undefined;
        readonly primaryMissileWeapon: MissileWeapons.Entry | undefined;
    }
}
export default BattleEntityStats;
