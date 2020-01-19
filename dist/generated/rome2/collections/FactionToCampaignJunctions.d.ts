import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
export declare namespace FactionToCampaignJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly _campaign: string;
        constructor(collectionCache: CollectionCache, values: any);
        get faction(): Factions.Entry | undefined;
        get campaign(): Campaigns.Entry | undefined;
    }
}
export default FactionToCampaignJunctions;
