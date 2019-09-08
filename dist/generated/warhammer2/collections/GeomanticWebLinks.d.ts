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
        readonly beamNormalCompositeScene: CampaignCompositeScenes.Entry | undefined;
        readonly circleCompositeScene: CampaignCompositeScenes.Entry | undefined;
        readonly underpoweredCircleCompositeScene: CampaignCompositeScenes.Entry | undefined;
        readonly fadingBeamNormalCompositeScene: CampaignCompositeScenes.Entry | undefined;
        readonly beamShortCompositeScene: CampaignCompositeScenes.Entry | undefined;
        readonly fadingBeamShortCompositeScene: CampaignCompositeScenes.Entry | undefined;
    }
}
export default GeomanticWebLinks;
