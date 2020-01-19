import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignCharacterPoolGroupIds } from "./CampaignCharacterPoolGroupIds";
export declare namespace CampaignCharacterPoolGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _characterPoolGroup: string;
        readonly enableRecruitment: boolean;
        readonly minCharacters: number;
        readonly medianCharacters: number;
        readonly maxCharacters: number;
        readonly targetCharacters: number;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get characterPoolGroup(): CampaignCharacterPoolGroupIds.Entry | undefined;
    }
}
export default CampaignCharacterPoolGroups;
