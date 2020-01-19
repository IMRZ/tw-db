import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { MainUnits } from "./MainUnits";
import { Factions } from "./Factions";
export declare namespace BuildingUnitsAllowed {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _building: string;
        readonly _unit: string;
        readonly xp: number;
        readonly conditions: string;
        readonly key: number;
        readonly _faction: string;
        readonly enabled: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get building(): BuildingLevels.Entry | undefined;
        get unit(): MainUnits.Entry | undefined;
        get faction(): Factions.Entry | undefined;
    }
}
export default BuildingUnitsAllowed;
