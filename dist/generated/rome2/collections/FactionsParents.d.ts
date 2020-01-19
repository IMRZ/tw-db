import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
export declare namespace FactionsParents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly _parentFaction: any;
        constructor(collectionCache: CollectionCache, values: any);
        get faction(): Factions.Entry | undefined;
    }
}
export default FactionsParents;
