import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { EncyclopediaFactionGroups } from "./EncyclopediaFactionGroups";
export declare namespace EncyclopediaFactionGroupings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly _group: string;
        readonly order: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly faction: Factions.Entry | undefined;
        readonly group: EncyclopediaFactionGroups.Entry | undefined;
    }
}
export default EncyclopediaFactionGroupings;
