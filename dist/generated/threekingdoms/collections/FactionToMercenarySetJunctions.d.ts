import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { MercenaryPools } from "./MercenaryPools";
export declare namespace FactionToMercenarySetJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly _mercenarySet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get faction(): Factions.Entry | undefined;
        get mercenarySet(): MercenaryPools.Entry | undefined;
    }
}
export default FactionToMercenarySetJunctions;
