import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { MissileWeapons } from "./MissileWeapons";
export declare namespace UnitMissileWeaponJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unit: string;
        readonly _missileWeapon: string;
        readonly id: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly unit: MainUnits.Entry | undefined;
        readonly missileWeapon: MissileWeapons.Entry | undefined;
    }
}
export default UnitMissileWeaponJunctions;
