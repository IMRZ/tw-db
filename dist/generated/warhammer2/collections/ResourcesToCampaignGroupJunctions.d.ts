import { CollectionCache, CollectionKey } from "../../../common";
import { Resources } from "./Resources";
import { CampaignGroups } from "./CampaignGroups";
export declare namespace ResourcesToCampaignGroupJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _resource: string;
        readonly _campaignGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly resource: Resources.Entry | undefined;
        readonly campaignGroup: CampaignGroups.Entry | undefined;
    }
}
export default ResourcesToCampaignGroupJunctions;
