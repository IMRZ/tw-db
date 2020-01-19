import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityPhaseEffectTypes } from "./SpecialAbilityPhaseEffectTypes";
import { SpecialAbilityStances } from "./SpecialAbilityStances";
import { SpecialAbilityPhaseDisplays } from "./SpecialAbilityPhaseDisplays";
import { AudioAbilityPhases } from "./AudioAbilityPhases";
import { AbilityColours } from "./AbilityColours";
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
        readonly freezeFatigue: boolean;
        readonly fatigueChangeRatio: number;
        readonly inspirationAuraRangeMod: number;
        readonly abilityRechargeChange: number;
        readonly onscreenName: string;
        readonly resurrect: boolean;
        readonly hpChangeFrequency: number;
        readonly healAmount: number;
        readonly damageChance: number;
        readonly damageAmount: number;
        readonly maxDamagedEntities: number;
        readonly manaRegenMod: number;
        readonly manaMaxDepletionMod: number;
        readonly imbueMagical: boolean;
        readonly imbueIgnition: number;
        readonly _imbueContact: string;
        readonly _phaseDisplay: string;
        readonly _phaseAudio: string;
        readonly rechargeTime: number;
        readonly isHiddenInUi: boolean;
        readonly affectsAllies: boolean;
        readonly affectsEnemies: boolean;
        readonly _abilityColour: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effectType(): SpecialAbilityPhaseEffectTypes.Entry | undefined;
        get requestedStance(): SpecialAbilityStances.Entry | undefined;
        get imbueContact(): SpecialAbilityPhases.Entry | undefined;
        get phaseDisplay(): SpecialAbilityPhaseDisplays.Entry | undefined;
        get phaseAudio(): AudioAbilityPhases.Entry | undefined;
        get abilityColour(): AbilityColours.Entry | undefined;
    }
}
export default SpecialAbilityPhases;
