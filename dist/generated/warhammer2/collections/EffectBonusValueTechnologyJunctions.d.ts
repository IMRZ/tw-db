import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsTechnologies } from "./CampaignBonusValueIdsTechnologies";
import { Technologies } from "./Technologies";
export declare namespace EffectBonusValueTechnologyJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _technology: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsTechnologies.Entry | undefined;
        readonly technology: Technologies.Entry | undefined;
    }
}
export default EffectBonusValueTechnologyJunctions;
