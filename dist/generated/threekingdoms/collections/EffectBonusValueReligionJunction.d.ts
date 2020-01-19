import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsReligion } from "./CampaignBonusValueIdsReligion";
import { Religions } from "./Religions";
export declare namespace EffectBonusValueReligionJunction {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _religion: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsReligion.Entry | undefined;
        get religion(): Religions.Entry | undefined;
    }
}
export default EffectBonusValueReligionJunction;
