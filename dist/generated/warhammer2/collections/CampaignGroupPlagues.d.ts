import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { Plagues } from "./Plagues";
export declare namespace CampaignGroupPlagues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _plague: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaignGroup: CampaignGroups.Entry | undefined;
        readonly plague: Plagues.Entry | undefined;
    }
}
export default CampaignGroupPlagues;
