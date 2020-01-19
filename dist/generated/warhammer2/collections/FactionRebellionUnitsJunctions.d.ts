import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { MainUnits } from "./MainUnits";
export declare namespace FactionRebellionUnitsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _factionKey: string;
        readonly _unitKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get factionKey(): Factions.Entry | undefined;
        get unitKey(): MainUnits.Entry | undefined;
    }
}
export default FactionRebellionUnitsJunctions;
