import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityPhaseEffectTypes } from "./SpecialAbilityPhaseEffectTypes";
import { SpecialAbilityStanceEnums } from "./SpecialAbilityStanceEnums";
import { UiEffects } from "./UiEffects";
export declare namespace SpecialAbilityPhases {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly duration: number;
        readonly _effectType: string;
        readonly _requestedStance: string;
        readonly unbreakable: boolean;
        readonly cantMove: boolean;
        readonly killOwnUnit: boolean;
        readonly minorCasualties: boolean;
        readonly majorCasualties: boolean;
        readonly freezeFatigue: boolean;
        readonly fatigueChangeRatio: number;
        readonly inspirationAuraRangeMod: number;
        readonly abilityRechargeChange: number;
        readonly _uiVfx: string;
        readonly rallyAmount: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effectType: SpecialAbilityPhaseEffectTypes.Entry | undefined;
        readonly requestedStance: SpecialAbilityStanceEnums.Entry | undefined;
        readonly uiVfx: UiEffects.Entry | undefined;
    }
}
export default SpecialAbilityPhases;
