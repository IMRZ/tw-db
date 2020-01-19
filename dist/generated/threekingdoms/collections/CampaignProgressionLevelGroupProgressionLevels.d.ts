import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignProgressionLevelGroups } from "./CampaignProgressionLevelGroups";
import { CampaignProgressionLevelDetails } from "./CampaignProgressionLevelDetails";
export declare namespace CampaignProgressionLevelGroupProgressionLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _progressionLevelGroup: string;
        readonly progressionLevel: number;
        readonly prestigeThreshold: number;
        readonly _progressionLevelDetails: string;
        constructor(collectionCache: CollectionCache, values: any);
        get progressionLevelGroup(): CampaignProgressionLevelGroups.Entry | undefined;
        get progressionLevelDetails(): CampaignProgressionLevelDetails.Entry | undefined;
    }
}
export default CampaignProgressionLevelGroupProgressionLevels;
