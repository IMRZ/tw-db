import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignCompositeScenes } from "./CampaignCompositeScenes";
import { CampaignGroups } from "./CampaignGroups";
export declare namespace CampaignRegionTransformationCompositeScenes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _compositeScene: string;
        readonly _campaignGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly compositeScene: CampaignCompositeScenes.Entry | undefined;
        readonly campaignGroup: CampaignGroups.Entry | undefined;
    }
}
export default CampaignRegionTransformationCompositeScenes;
