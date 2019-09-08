import { CollectionCache, CollectionKey } from "../../../common";
import { UnitMeleeWeaponsEnum } from "./UnitMeleeWeaponsEnum";
import { AudioMeleeWeaponTypes } from "./AudioMeleeWeaponTypes";
import { BattleEntitiesSizeEnums } from "./BattleEntitiesSizeEnums";
import { SpecialAbilityPhases } from "./SpecialAbilityPhases";
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
        constructor(collectionCache: CollectionCache, values: any);
        readonly meleeWeaponType: UnitMeleeWeaponsEnum.Entry | undefined;
        readonly audioType: AudioMeleeWeaponTypes.Entry | undefined;
        readonly splashAttackTargetSize: BattleEntitiesSizeEnums.Entry | undefined;
        readonly contactPhase: SpecialAbilityPhases.Entry | undefined;
    }
}
export default MeleeWeapons;
