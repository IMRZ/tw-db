import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapAttritions } from "./CampaignMapAttritions";
import { CampaignCompositeScenes } from "./CampaignCompositeScenes";
import { CampaignStormTypes } from "./CampaignStormTypes";
export declare namespace CampaignStorms {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly displayName: string;
        readonly _attrition: string;
        readonly _compositeScene: string;
        readonly strength: string;
        readonly _tilingCompositeScene: string;
        readonly _type: string;
        constructor(collectionCache: CollectionCache, values: any);
        get attrition(): CampaignMapAttritions.Entry | undefined;
        get compositeScene(): CampaignCompositeScenes.Entry | undefined;
        get tilingCompositeScene(): CampaignCompositeScenes.Entry | undefined;
        get type(): CampaignStormTypes.Entry | undefined;
    }
}
export default CampaignStorms;
