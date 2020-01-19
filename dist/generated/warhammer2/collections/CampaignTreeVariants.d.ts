import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignTreeIds } from "./CampaignTreeIds";
import { CampaignTreeTypes } from "./CampaignTreeTypes";
import { AudioCampaignTreeTypes } from "./AudioCampaignTreeTypes";
export declare namespace CampaignTreeVariants {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _treeId: string;
        readonly _treeType: string;
        readonly treeRigid: string;
        readonly _treeAudio: string;
        constructor(collectionCache: CollectionCache, values: any);
        get treeId(): CampaignTreeIds.Entry | undefined;
        get treeType(): CampaignTreeTypes.Entry | undefined;
        get treeAudio(): AudioCampaignTreeTypes.Entry | undefined;
    }
}
export default CampaignTreeVariants;
