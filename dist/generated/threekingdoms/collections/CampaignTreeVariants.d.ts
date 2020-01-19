import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignTreeIds } from "./CampaignTreeIds";
import { AudioCampaignTreeTypes } from "./AudioCampaignTreeTypes";
import { Seasons } from "./Seasons";
export declare namespace CampaignTreeVariants {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _treeId: string;
        readonly treeRigid: string;
        readonly _treeAudio: string;
        readonly _season: string;
        constructor(collectionCache: CollectionCache, values: any);
        get treeId(): CampaignTreeIds.Entry | undefined;
        get treeAudio(): AudioCampaignTreeTypes.Entry | undefined;
        get season(): Seasons.Entry | undefined;
    }
}
export default CampaignTreeVariants;
