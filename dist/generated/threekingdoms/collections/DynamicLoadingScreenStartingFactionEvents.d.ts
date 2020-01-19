import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { DynamicLoadingScreenEvents } from "./DynamicLoadingScreenEvents";
import { Campaigns } from "./Campaigns";
export declare namespace DynamicLoadingScreenStartingFactionEvents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly _loadingScreenEvent: string;
        readonly _campaignKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get faction(): Factions.Entry | undefined;
        get loadingScreenEvent(): DynamicLoadingScreenEvents.Entry | undefined;
        get campaignKey(): Campaigns.Entry | undefined;
    }
}
export default DynamicLoadingScreenStartingFactionEvents;
