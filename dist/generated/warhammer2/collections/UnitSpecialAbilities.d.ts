import { CollectionCache, CollectionKey } from "../../../common";
import { UnitAbilities } from "./UnitAbilities";
import { Projectiles } from "./Projectiles";
import { SpecialAbilitiesSpecificBehaviourTypes } from "./SpecialAbilitiesSpecificBehaviourTypes";
import { ProjectileBombardments } from "./ProjectileBombardments";
import { LandUnits } from "./LandUnits";
import { BattleVortexs } from "./BattleVortexs";
import { SpecialAbilityStanceEnums } from "./SpecialAbilityStanceEnums";
import { AreaOfEffectDisplays } from "./AreaOfEffectDisplays";
import { ParticleEffects } from "./ParticleEffects";
import { ProjectilesExplosions } from "./ProjectilesExplosions";
import { BattleAiAbilitiesUsageTemplateNames } from "./BattleAiAbilitiesUsageTemplateNames";
import { AudioAbilities } from "./AudioAbilities";
import { SpecialAbilityDisplays } from "./SpecialAbilityDisplays";
import { AudioVoBattleSpecialAbilityStates } from "./AudioVoBattleSpecialAbilityStates";
import { SpecialAbilitySpawnTypes } from "./SpecialAbilitySpawnTypes";
import { BattleVortexCompositeSceneGroups } from "./BattleVortexCompositeSceneGroups";
export declare namespace UnitSpecialAbilities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly numUses: number;
        readonly activeTime: number;
        readonly rechargeTime: number;
        readonly initialRecharge: number;
        readonly windUpTime: number;
        readonly passive: boolean;
        readonly effectRange: number;
        readonly affectSelf: boolean;
        readonly numEffectedFriendlyUnits: number;
        readonly numEffectedEnemyUnits: number;
        readonly updateTargetsEveryFrame: boolean;
        readonly _activatedProjectile: string;
        readonly targetFriends: boolean;
        readonly targetEnemies: boolean;
        readonly targetGround: boolean;
        readonly targetInterceptRange: number;
        readonly _assumeSpecificBehaviour: string;
        readonly clearCurrentOrder: boolean;
        readonly uniqueId: number;
        readonly _bombardment: string;
        readonly _spawnedUnit: string;
        readonly _vortex: string;
        readonly _windUpStance: string;
        readonly manaCost: number;
        readonly minRange: number;
        readonly _targettingAoe: string;
        readonly _passiveAoe: string;
        readonly _activeAoe: string;
        readonly _activationEffect: string;
        readonly miscastChance: number;
        readonly _miscastExplosion: string;
        readonly _aiUsage: string;
        readonly _audio: string;
        readonly _specialAbilityDisplay: string;
        readonly _voiceoverState: string;
        readonly additionalMeleeCp: number;
        readonly additionalMissileCp: number;
        readonly _parentAbility: string;
        readonly _spawnType: string;
        readonly _spawnProxyVfx: string;
        readonly targetGroundUnderAllies: boolean;
        readonly targetGroundUnderEnemies: boolean;
        readonly miscastGlobalBonus: boolean;
        readonly targetSelf: boolean;
        readonly _compositeSceneGroupOnWindUp: string;
        readonly _compositeSceneGroupOnActive: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly key: UnitAbilities.Entry | undefined;
        readonly activatedProjectile: Projectiles.Entry | undefined;
        readonly assumeSpecificBehaviour: SpecialAbilitiesSpecificBehaviourTypes.Entry | undefined;
        readonly bombardment: ProjectileBombardments.Entry | undefined;
        readonly spawnedUnit: LandUnits.Entry | undefined;
        readonly vortex: BattleVortexs.Entry | undefined;
        readonly windUpStance: SpecialAbilityStanceEnums.Entry | undefined;
        readonly targettingAoe: AreaOfEffectDisplays.Entry | undefined;
        readonly passiveAoe: AreaOfEffectDisplays.Entry | undefined;
        readonly activeAoe: AreaOfEffectDisplays.Entry | undefined;
        readonly activationEffect: ParticleEffects.Entry | undefined;
        readonly miscastExplosion: ProjectilesExplosions.Entry | undefined;
        readonly aiUsage: BattleAiAbilitiesUsageTemplateNames.Entry | undefined;
        readonly audio: AudioAbilities.Entry | undefined;
        readonly specialAbilityDisplay: SpecialAbilityDisplays.Entry | undefined;
        readonly voiceoverState: AudioVoBattleSpecialAbilityStates.Entry | undefined;
        readonly parentAbility: UnitSpecialAbilities.Entry | undefined;
        readonly spawnType: SpecialAbilitySpawnTypes.Entry | undefined;
        readonly spawnProxyVfx: ParticleEffects.Entry | undefined;
        readonly compositeSceneGroupOnWindUp: BattleVortexCompositeSceneGroups.Entry | undefined;
        readonly compositeSceneGroupOnActive: BattleVortexCompositeSceneGroups.Entry | undefined;
    }
}
export default UnitSpecialAbilities;