import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignCompositeScenes } from "./CampaignCompositeScenes";
export declare namespace SlotSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly useDiscoverabilityFeature: boolean;
        readonly _compositeScene: string;
        constructor(collectionCache: CollectionCache, values: any);
        get compositeScene(): CampaignCompositeScenes.Entry | undefined;
    }
}
export default SlotSets;
