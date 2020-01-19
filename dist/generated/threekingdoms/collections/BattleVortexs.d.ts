import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityPhases } from "./SpecialAbilityPhases";
import { CompositeSceneFiles } from "./CompositeSceneFiles";
import { BattleVortexLaunchSources } from "./BattleVortexLaunchSources";
import { BattleVortexCollisionResponses } from "./BattleVortexCollisionResponses";
import { ParticleEffects } from "./ParticleEffects";
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
        readonly delayBetweenVortexes: number;
        readonly useFixedSpread: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get contactEffect(): SpecialAbilityPhases.Entry | undefined;
        get compositeScene(): CompositeSceneFiles.Entry | undefined;
        get launchSource(): BattleVortexLaunchSources.Entry | undefined;
        get buildingCollision(): BattleVortexCollisionResponses.Entry | undefined;
        get launchVfx(): ParticleEffects.Entry | undefined;
        get compositeSceneBlood(): CompositeSceneFiles.Entry | undefined;
    }
}
export default BattleVortexs;
