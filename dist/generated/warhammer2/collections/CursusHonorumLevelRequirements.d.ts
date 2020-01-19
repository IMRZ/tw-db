import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";
export declare namespace CursusHonorumLevelRequirements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _subcultureKey: string;
        readonly level: number;
        readonly rank: number;
        readonly age: number;
        readonly _factionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get subcultureKey(): CulturesSubcultures.Entry | undefined;
        get factionKey(): Factions.Entry | undefined;
    }
}
export default CursusHonorumLevelRequirements;
