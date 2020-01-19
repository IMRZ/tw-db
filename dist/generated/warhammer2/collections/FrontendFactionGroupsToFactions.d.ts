import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { FrontendFactionGroups } from "./FrontendFactionGroups";
export declare namespace FrontendFactionGroupsToFactions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _factionKey: string;
        readonly _factionGroup: string;
        readonly sortOrder: number;
        readonly isMajorFaction: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get factionKey(): Factions.Entry | undefined;
        get factionGroup(): FrontendFactionGroups.Entry | undefined;
    }
}
export default FrontendFactionGroupsToFactions;
