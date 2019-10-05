import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityPhases } from "./SpecialAbilityPhases";
import { CompositeSceneFiles } from "./CompositeSceneFiles";
import { BattleVortexLaunchSources } from "./BattleVortexLaunchSources";
import { BattleVortexCollisionResponses } from "./BattleVortexCollisionResponses";
import { ParticleEffects } from "./ParticleEffects";
import { BattleVortexCompositeSceneGroups } from "./BattleVortexCompositeSceneGroups";
export declare namespace BattleVortexs {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly vortexKey: string;
        readonly duration: number;
        readonly damage: number;
        readonly damageAp: number;
        readonly expansionSpeed: number;
        readonly startRadius: number;
        readonly goalRadius: number;
        readonly movementSpeed: number;
        readonly moveChangeFreq: number;
        readonly changeMaxAngle: number;
        readonly _contactEffect: string;
        readonly heightOffGround: number;
        readonly infiniteHeight: boolean;
        readonly ignitionAmount: number;
        readonly isMagical: boolean;
        readonly _compositeScene: string;
        readonly detonationForce: number;
        readonly _launchSource: string;
        readonly _buildingCollision: string;
        readonly delay: number;
        readonly _launchVfx: string;
        readonly _compositeSceneBlood: string;
        readonly numVortexes: number;
        readonly affectsAllies: boolean;
        readonly launchSourceOffset: number;
        readonly _compositeSceneGroup: string;
        readonly delayBetweenVortexes: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly contactEffect: SpecialAbilityPhases.Entry | undefined;
        readonly compositeScene: CompositeSceneFiles.Entry | undefined;
        readonly launchSource: BattleVortexLaunchSources.Entry | undefined;
        readonly buildingCollision: BattleVortexCollisionResponses.Entry | undefined;
        readonly launchVfx: ParticleEffects.Entry | undefined;
        readonly compositeSceneBlood: CompositeSceneFiles.Entry | undefined;
        readonly compositeSceneGroup: BattleVortexCompositeSceneGroups.Entry | undefined;
    }
}
export default BattleVortexs;
