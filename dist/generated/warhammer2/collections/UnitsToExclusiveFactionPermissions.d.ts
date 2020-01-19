import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { Factions } from "./Factions";
export declare namespace UnitsToExclusiveFactionPermissions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly _faction: string;
        readonly allowed: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get key(): MainUnits.Entry | undefined;
        get faction(): Factions.Entry | undefined;
    }
}
export default UnitsToExclusiveFactionPermissions;
