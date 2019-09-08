import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { PooledResources } from "./PooledResources";
export declare namespace CampaignGroupPooledResources {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _resource: string;
        readonly initialAmount: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaignGroup: CampaignGroups.Entry | undefined;
        readonly resource: PooledResources.Entry | undefined;
    }
}
export default CampaignGroupPooledResources;
