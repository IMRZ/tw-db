import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { Factions } from "./Factions";
export declare namespace UnitsCustomBattlePermissions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unit: string;
        readonly _faction: string;
        readonly generalUnit: boolean;
        readonly siegeUnitAttacker: boolean;
        readonly siegeUnitDefender: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get unit(): MainUnits.Entry | undefined;
        get faction(): Factions.Entry | undefined;
    }
}
export default UnitsCustomBattlePermissions;
