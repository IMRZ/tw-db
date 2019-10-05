import { CollectionCache, CollectionKey } from "../../../common";
import { UnitSets } from "./UnitSets";
export declare namespace UnitSetToMpUnitCaps {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unitSet: string;
        readonly localisedName: string;
        readonly cap: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly unitSet: UnitSets.Entry | undefined;
    }
}
export default UnitSetToMpUnitCaps;
