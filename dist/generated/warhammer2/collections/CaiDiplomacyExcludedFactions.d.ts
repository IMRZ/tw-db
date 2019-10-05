import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
export declare namespace CaiDiplomacyExcludedFactions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly _campaign: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly faction: Factions.Entry | undefined;
        readonly campaign: Campaigns.Entry | undefined;
    }
}
export default CaiDiplomacyExcludedFactions;