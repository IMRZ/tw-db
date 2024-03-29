import { CollectionCache, CollectionKey } from "../../../common";
import { UnitCategory } from "./UnitCategory";
import { UnitClass } from "./UnitClass";
import { UnitDescriptionShortTexts } from "./UnitDescriptionShortTexts";
import { UnitDescriptionHistoricalTexts } from "./UnitDescriptionHistoricalTexts";
import { UnitDescriptionStrengthsWeaknessesTexts } from "./UnitDescriptionStrengthsWeaknessesTexts";
import { UnitSpacings } from "./UnitSpacings";
import { UnitTrainingLevelEnum } from "./UnitTrainingLevelEnum";
import { UnitArmourTypes } from "./UnitArmourTypes";
import { UnitShieldTypes } from "./UnitShieldTypes";
import { MissileWeapons } from "./MissileWeapons";
import { MeleeWeapons } from "./MeleeWeapons";
import { LandUnitsOfficers } from "./LandUnitsOfficers";
import { UnitAttributesGroups } from "./UnitAttributesGroups";
import { AudioVoSelectedSwitches } from "./AudioVoSelectedSwitches";
import { GroundTypeStatEffectGroups } from "./GroundTypeStatEffectGroups";
import { AiUsageGroups } from "./AiUsageGroups";
import { TexcExpansions } from "./TexcExpansions";
import { PersonalityLocationEnums } from "./PersonalityLocationEnums";
export declare namespace LandUnits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreenName: string;
        readonly _category: string;
        readonly _class: string;
        readonly _shortDescriptionText: string;
        readonly _historicalDescriptionText: string;
        readonly _strengthsWeaknessesText: string;
        readonly campaignActionPoints: number;
        readonly supportsFirstPerson: boolean;
        readonly _spacing: string;
        readonly rankDepth: number;
        readonly morale: number;
        readonly _trainingLevel: string;
        readonly _armour: string;
        readonly _shield: string;
        readonly _primaryMissileWeapon: string;
        readonly accuracy: number;
        readonly primaryAmmo: number;
        readonly _primaryMeleeWeapon: string;
        readonly meleeAttack: number;
        readonly chargeBonus: number;
        readonly meleeDefence: number;
        readonly dismountedMeleeAttack: number;
        readonly dismountedChargeBonus: number;
        readonly _officers: string;
        readonly isMale: boolean;
        readonly visibilitySpottingRangeMin: number;
        readonly visibilitySpottingRangeMax: number;
        readonly abilityGlobalRecharge: number;
        readonly _attributeGroup: string;
        readonly spotDistTree: number;
        readonly spotDistScrub: number;
        readonly reloadTimeReductionPercentage: number;
        readonly looseSpacing: boolean;
        readonly _selectionVo: string;
        readonly _selectedVoSecondary: string;
        readonly _selectedVoTertiary: string;
        readonly hidingScalar: number;
        readonly _groundStatEffectGroup: string;
        readonly capturePower: number;
        readonly secondaryAmmo: number;
        readonly damageModFlame: number;
        readonly damageModMagic: number;
        readonly damageModPhysical: number;
        readonly damageModMissile: number;
        readonly damageModAll: number;
        readonly _aiUsageGroup: string;
        readonly canSkirmish: boolean;
        readonly concealedName: string;
        readonly syncLocomotion: boolean;
        readonly _gameExpansionKey: string;
        readonly meleeAttackIntervalReductionPercentage: number;
        readonly _personalitiesLocation: string;
        readonly isPrimarilyMelee: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get category(): UnitCategory.Entry | undefined;
        get class(): UnitClass.Entry | undefined;
        get shortDescriptionText(): UnitDescriptionShortTexts.Entry | undefined;
        get historicalDescriptionText(): UnitDescriptionHistoricalTexts.Entry | undefined;
        get strengthsWeaknessesText(): UnitDescriptionStrengthsWeaknessesTexts.Entry | undefined;
        get spacing(): UnitSpacings.Entry | undefined;
        get trainingLevel(): UnitTrainingLevelEnum.Entry | undefined;
        get armour(): UnitArmourTypes.Entry | undefined;
        get shield(): UnitShieldTypes.Entry | undefined;
        get primaryMissileWeapon(): MissileWeapons.Entry | undefined;
        get primaryMeleeWeapon(): MeleeWeapons.Entry | undefined;
        get officers(): LandUnitsOfficers.Entry | undefined;
        get attributeGroup(): UnitAttributesGroups.Entry | undefined;
        get selectionVo(): AudioVoSelectedSwitches.Entry | undefined;
        get selectedVoSecondary(): AudioVoSelectedSwitches.Entry | undefined;
        get selectedVoTertiary(): AudioVoSelectedSwitches.Entry | undefined;
        get groundStatEffectGroup(): GroundTypeStatEffectGroups.Entry | undefined;
        get aiUsageGroup(): AiUsageGroups.Entry | undefined;
        get gameExpansionKey(): TexcExpansions.Entry | undefined;
        get personalitiesLocation(): PersonalityLocationEnums.Entry | undefined;
    }
}
export default LandUnits;
