import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
export declare namespace UiNewContentFactions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly layoutPath: string;
        readonly _optionalCampaignKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get faction(): Factions.Entry | undefined;
        get optionalCampaignKey(): Campaigns.Entry | undefined;
    }
}
export default UiNewContentFactions;
