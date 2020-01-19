import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapRoadObjectsDisplayModels } from "./CampaignMapRoadObjectsDisplayModels";
import { CampaignCompositeScenes } from "./CampaignCompositeScenes";
export declare namespace CampaignMapRoadObjectsDisplayModelCompositeScenes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly index: number;
        readonly _model: string;
        readonly _compositeScene: string;
        readonly offsetDistance: number;
        readonly scale: number;
        constructor(collectionCache: CollectionCache, values: any);
        get model(): CampaignMapRoadObjectsDisplayModels.Entry | undefined;
        get compositeScene(): CampaignCompositeScenes.Entry | undefined;
    }
}
export default CampaignMapRoadObjectsDisplayModelCompositeScenes;
