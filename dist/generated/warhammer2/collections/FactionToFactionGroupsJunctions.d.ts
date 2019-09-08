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
        readonly factionKey: Factions.Entry | undefined;
        readonly factionGroupKey: FactionGroups.Entry | undefined;
    }
}
export default FactionToFactionGroupsJunctions;
