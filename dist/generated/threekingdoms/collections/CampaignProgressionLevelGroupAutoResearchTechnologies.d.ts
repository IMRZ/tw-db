import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignProgressionLevelGroups } from "./CampaignProgressionLevelGroups";
import { Technologies } from "./Technologies";
export declare namespace CampaignProgressionLevelGroupAutoResearchTechnologies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _progressionLevelGroup: string;
        readonly progressionLevel: number;
        readonly _technology: string;
        constructor(collectionCache: CollectionCache, values: any);
        get progressionLevelGroup(): CampaignProgressionLevelGroups.Entry | undefined;
        get technology(): Technologies.Entry | undefined;
    }
}
export default CampaignProgressionLevelGroupAutoResearchTechnologies;
