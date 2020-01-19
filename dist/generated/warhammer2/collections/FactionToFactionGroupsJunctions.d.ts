import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { FactionGroups } from "./FactionGroups";
export declare namespace FactionToFactionGroupsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _factionKey: string;
        readonly _factionGroupKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get factionKey(): Factions.Entry | undefined;
        get factionGroupKey(): FactionGroups.Entry | undefined;
    }
}
export default FactionToFactionGroupsJunctions;
