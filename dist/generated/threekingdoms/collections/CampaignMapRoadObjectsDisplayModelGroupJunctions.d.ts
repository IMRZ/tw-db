import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapRoadObjectsDisplayModelGroups } from "./CampaignMapRoadObjectsDisplayModelGroups";
import { CampaignMapRoadObjectsDisplayModels } from "./CampaignMapRoadObjectsDisplayModels";
export declare namespace CampaignMapRoadObjectsDisplayModelGroupJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _group: string;
        readonly _model: string;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): CampaignMapRoadObjectsDisplayModelGroups.Entry | undefined;
        get model(): CampaignMapRoadObjectsDisplayModels.Entry | undefined;
    }
}
export default CampaignMapRoadObjectsDisplayModelGroupJunctions;
