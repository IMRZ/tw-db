import { CollectionCache, CollectionKey } from "../../../common";
import { UnitMeleeWeaponsEnum } from "./UnitMeleeWeaponsEnum";
import { AudioMeleeWeaponTypes } from "./AudioMeleeWeaponTypes";
import { BattleEntitiesSizeEnums } from "./BattleEntitiesSizeEnums";
import { SpecialAbilityPhases } from "./SpecialAbilityPhases";
import { ProjectilesScalingDamages } from "./ProjectilesScalingDamages";
export declare namespace MeleeWeapons {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly damage: number;
        readonly apDamage: number;
        readonly firstStrike: number;
        readonly bonusVInfantry: number;
        readonly bonusVCavalry: number;
        readonly bonusVLarge: number;
        readonly weaponLength: number;
        readonly _meleeWeaponType: string;
        readonly _audioType: string;
        readonly _splashAttackTargetSize: string;
        readonly splashAttackMaxAttacks: number;
        readonly splashAttackPowerMultiplier: number;
        readonly buildingDamage: number;
        readonly ignitionAmount: number;
        readonly isMagical: boolean;
        readonly _contactPhase: string;
        readonly collisionAttackMaxTargets: number;
        readonly collisionAttackMaxTargetsCooldown: number;
        readonly meleeAttackInterval: number;
        readonly _scalingDamage: string;
        constructor(collectionCache: CollectionCache, values: any);
        get meleeWeaponType(): UnitMeleeWeaponsEnum.Entry | undefined;
        get audioType(): AudioMeleeWeaponTypes.Entry | undefined;
        get splashAttackTargetSize(): BattleEntitiesSizeEnums.Entry | undefined;
        get contactPhase(): SpecialAbilityPhases.Entry | undefined;
        get scalingDamage(): ProjectilesScalingDamages.Entry | undefined;
    }
}
export default MeleeWeapons;
