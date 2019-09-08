import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignCompositeScenes } from "./CampaignCompositeScenes";
export declare namespace CampaignGroupAgentActionCompositeScenes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _garrisonScene: string;
        readonly _characterScene: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaignGroup: CampaignGroups.Entry | undefined;
        readonly garrisonScene: CampaignCompositeScenes.Entry | undefined;
        readonly characterScene: CampaignCompositeScenes.Entry | undefined;
    }
}
export default CampaignGroupAgentActionCompositeScenes;
