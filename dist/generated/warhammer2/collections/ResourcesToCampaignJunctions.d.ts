import { CollectionCache, CollectionKey } from "../../../common";
import { Resources } from "./Resources";
import { Campaigns } from "./Campaigns";
export declare namespace ResourcesToCampaignJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _resource: string;
        readonly _campaign: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly resource: Resources.Entry | undefined;
        readonly campaign: Campaigns.Entry | undefined;
    }
}
export default ResourcesToCampaignJunctions;
