import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsSubcultures } from "./CampaignBonusValueIdsSubcultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace EffectBonusValueSubcultureJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _subculture: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsSubcultures.Entry | undefined;
        readonly subculture: CulturesSubcultures.Entry | undefined;
    }
}
export default EffectBonusValueSubcultureJunctions;
