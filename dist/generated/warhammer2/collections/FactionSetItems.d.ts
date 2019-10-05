import { CollectionCache, CollectionKey } from "../../../common";
import { FactionSets } from "./FactionSets";
import { Factions } from "./Factions";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Cultures } from "./Cultures";
export declare namespace FactionSetItems {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _set: string;
        readonly _faction: string;
        readonly _subculture: string;
        readonly _culture: string;
        readonly remove: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly set: FactionSets.Entry | undefined;
        readonly faction: Factions.Entry | undefined;
        readonly subculture: CulturesSubcultures.Entry | undefined;
        readonly culture: Cultures.Entry | undefined;
    }
}
export default FactionSetItems;
