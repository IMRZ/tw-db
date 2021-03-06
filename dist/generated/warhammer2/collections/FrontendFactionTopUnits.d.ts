import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { MainUnits } from "./MainUnits";
export declare namespace FrontendFactionTopUnits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly _unit: string;
        constructor(collectionCache: CollectionCache, values: any);
        get faction(): Factions.Entry | undefined;
        get unit(): MainUnits.Entry | undefined;
    }
}
export default FrontendFactionTopUnits;
