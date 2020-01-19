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
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get garrisonScene(): CampaignCompositeScenes.Entry | undefined;
        get characterScene(): CampaignCompositeScenes.Entry | undefined;
    }
}
export default CampaignGroupAgentActionCompositeScenes;
