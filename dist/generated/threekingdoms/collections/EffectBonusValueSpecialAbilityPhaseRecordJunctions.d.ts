import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsSpecialAbilityPhases } from "./CampaignBonusValueIdsSpecialAbilityPhases";
import { SpecialAbilityPhases } from "./SpecialAbilityPhases";
export declare namespace EffectBonusValueSpecialAbilityPhaseRecordJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _specialAbilityPhase: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsSpecialAbilityPhases.Entry | undefined;
        get specialAbilityPhase(): SpecialAbilityPhases.Entry | undefined;
    }
}
export default EffectBonusValueSpecialAbilityPhaseRecordJunctions;
