import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
export declare namespace CustomBattleFactions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _factionKey: string;
        readonly sortOrder: number;
        readonly cultureSortOrder: number;
        constructor(collectionCache: CollectionCache, values: any);
        get factionKey(): Factions.Entry | undefined;
    }
}
export default CustomBattleFactions;
