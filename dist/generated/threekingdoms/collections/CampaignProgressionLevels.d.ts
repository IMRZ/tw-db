import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignProgressionLevelGroups } from "./CampaignProgressionLevelGroups";
export declare namespace CampaignProgressionLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _progressionLevelGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get progressionLevelGroup(): CampaignProgressionLevelGroups.Entry | undefined;
    }
}
export default CampaignProgressionLevels;
