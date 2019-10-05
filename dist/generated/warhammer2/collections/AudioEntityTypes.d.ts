import { CollectionCache, CollectionKey } from "../../../common";
import { AudioEntityRandomVocalisations } from "./AudioEntityRandomVocalisations";
import { AudioMaterials } from "./AudioMaterials";
import { AudioGroupSounds } from "./AudioGroupSounds";
import { AudioEntityTypeLimitations } from "./AudioEntityTypeLimitations";
import { AudioEntityLoopingSounds } from "./AudioEntityLoopingSounds";
import { AudioEntityActors } from "./AudioEntityActors";
import { TexcExpansions } from "./TexcExpansions";
import { AudioSphereOfInfluences } from "./AudioSphereOfInfluences";
import { AudioEntityFocusPools } from "./AudioEntityFocusPools";
export declare namespace AudioEntityTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly switch: string;
        readonly _idleRandomVocalisation: string;
        readonly _runningRandomVocalisation: string;
        readonly _combatRandomVocalisation: string;
        readonly _fatiguedMovingRandomVocalisation: string;
        readonly _drowningRandomVocalisation: string;
        readonly musicianEvent: string;
        readonly _material: string;
        readonly _walkingRandomVocalisation: string;
        readonly _groupMovement: string;
        readonly _limitation: string;
        readonly _idleLoopingSound: string;
        readonly _movingLoopingSound: string;
        readonly _rotatingLoopingSound: string;
        readonly _actorType: string;
        readonly _fatiguedIdleRandomVocalisation: string;
        readonly _groupFlyingIdle: string;
        readonly _groupFlyingMoving: string;
        readonly onlyUsesMaterial: boolean;
        readonly _groupMovementArmourOverride: string;
        readonly _groupIdle: string;
        readonly attenuationScale: number;
        readonly _groupMeleeArmourOverride: string;
        readonly triggersCinematic: boolean;
        readonly _gameExpansionKey: string;
        readonly _sphereOfInfluenceDefault: string;
        readonly _sphereOfInfluenceCombat: string;
        readonly shouldUseUniqueEntitySwitches: boolean;
        readonly maxUniqueEntitySwitches: number;
        readonly uniqueEntitySwitch: string;
        readonly useFocusRtpc: boolean;
        readonly maxCameraDistanceForFocus: number;
        readonly minCameraDistanceForFocus: number;
        readonly focusRtpc: string;
        readonly considerMoving: boolean;
        readonly _groupIdleShoot: string;
        readonly _groupIdleCombatReady: string;
        readonly recordId: number;
        readonly _focusPool: string;
        readonly minUnitFocusVelocity: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly idleRandomVocalisation: AudioEntityRandomVocalisations.Entry | undefined;
        readonly runningRandomVocalisation: AudioEntityRandomVocalisations.Entry | undefined;
        readonly combatRandomVocalisation: AudioEntityRandomVocalisations.Entry | undefined;
        readonly fatiguedMovingRandomVocalisation: AudioEntityRandomVocalisations.Entry | undefined;
        readonly drowningRandomVocalisation: AudioEntityRandomVocalisations.Entry | undefined;
        readonly material: AudioMaterials.Entry | undefined;
        readonly walkingRandomVocalisation: AudioEntityRandomVocalisations.Entry | undefined;
        readonly groupMovement: AudioGroupSounds.Entry | undefined;
        readonly limitation: AudioEntityTypeLimitations.Entry | undefined;
        readonly idleLoopingSound: AudioEntityLoopingSounds.Entry | undefined;
        readonly movingLoopingSound: AudioEntityLoopingSounds.Entry | undefined;
        readonly rotatingLoopingSound: AudioEntityLoopingSounds.Entry | undefined;
        readonly actorType: AudioEntityActors.Entry | undefined;
        readonly fatiguedIdleRandomVocalisation: AudioEntityRandomVocalisations.Entry | undefined;
        readonly groupFlyingIdle: AudioGroupSounds.Entry | undefined;
        readonly groupFlyingMoving: AudioGroupSounds.Entry | undefined;
        readonly groupMovementArmourOverride: AudioGroupSounds.Entry | undefined;
        readonly groupIdle: AudioGroupSounds.Entry | undefined;
        readonly groupMeleeArmourOverride: AudioGroupSounds.Entry | undefined;
        readonly gameExpansionKey: TexcExpansions.Entry | undefined;
        readonly sphereOfInfluenceDefault: AudioSphereOfInfluences.Entry | undefined;
        readonly sphereOfInfluenceCombat: AudioSphereOfInfluences.Entry | undefined;
        readonly groupIdleShoot: AudioGroupSounds.Entry | undefined;
        readonly groupIdleCombatReady: AudioGroupSounds.Entry | undefined;
        readonly focusPool: AudioEntityFocusPools.Entry | undefined;
    }
}
export default AudioEntityTypes;