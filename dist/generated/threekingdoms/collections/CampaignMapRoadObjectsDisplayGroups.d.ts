import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignMapRoadObjectsDisplayModelGroups } from "./CampaignMapRoadObjectsDisplayModelGroups";
export declare namespace CampaignMapRoadObjectsDisplayGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _modelGroup: string;
        readonly frequency: number;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get modelGroup(): CampaignMapRoadObjectsDisplayModelGroups.Entry | undefined;
    }
}
export default CampaignMapRoadObjectsDisplayGroups;
