import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignCompositeScenes } from "./CampaignCompositeScenes";
export declare namespace GeomanticWebLinks {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly linkStrength: number;
        readonly _beamNormalCompositeScene: string;
        readonly _circleCompositeScene: string;
        readonly _underpoweredCircleCompositeScene: string;
        readonly _fadingBeamNormalCompositeScene: string;
        readonly _beamShortCompositeScene: string;
        readonly _fadingBeamShortCompositeScene: string;
        constructor(collectionCache: CollectionCache, values: any);
        get beamNormalCompositeScene(): CampaignCompositeScenes.Entry | undefined;
        get circleCompositeScene(): CampaignCompositeScenes.Entry | undefined;
        get underpoweredCircleCompositeScene(): CampaignCompositeScenes.Entry | undefined;
        get fadingBeamNormalCompositeScene(): CampaignCompositeScenes.Entry | undefined;
        get beamShortCompositeScene(): CampaignCompositeScenes.Entry | undefined;
        get fadingBeamShortCompositeScene(): CampaignCompositeScenes.Entry | undefined;
    }
}
export default GeomanticWebLinks;
