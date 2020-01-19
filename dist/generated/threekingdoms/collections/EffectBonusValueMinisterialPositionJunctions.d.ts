import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsMinisterialPositions } from "./CampaignBonusValueIdsMinisterialPositions";
import { MinisterialPositions } from "./MinisterialPositions";
export declare namespace EffectBonusValueMinisterialPositionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _ministerialPosition: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsMinisterialPositions.Entry | undefined;
        get ministerialPosition(): MinisterialPositions.Entry | undefined;
    }
}
export default EffectBonusValueMinisterialPositionJunctions;
