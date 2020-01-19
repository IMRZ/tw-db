import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
export declare namespace EventLogDescriptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly eventKey: string;
        readonly eventTitle: string;
        readonly eventContent: string;
        readonly icon: string;
        readonly hasPosition: boolean;
        readonly isRegionPosition: boolean;
        readonly notes: string;
        readonly _optionalCampaignKey: string;
        readonly movieId: number;
        constructor(collectionCache: CollectionCache, values: any);
        get optionalCampaignKey(): Campaigns.Entry | undefined;
    }
}
export default EventLogDescriptions;
