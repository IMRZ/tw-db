import { CollectionCache, CollectionKey } from "../../../common";
import { Projectiles } from "./Projectiles";
import { ProjectileBombardmentLaunchSources } from "./ProjectileBombardmentLaunchSources";
import { ParticleEffects } from "./ParticleEffects";
import { AudioProjectileBombardments } from "./AudioProjectileBombardments";
export declare namespace ProjectileBombardments {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly bombardmentKey: string;
        readonly _projectileType: string;
        readonly numProjectiles: number;
        readonly startTime: number;
        readonly arrivalWindow: number;
        readonly radiusSpread: number;
        readonly _launchSource: string;
        readonly _launchVfx: string;
        readonly launchHeight: number;
        readonly _audioType: string;
        readonly launchHeightUnderground: number;
        readonly randomiseLaunch: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly projectileType: Projectiles.Entry | undefined;
        readonly launchSource: ProjectileBombardmentLaunchSources.Entry | undefined;
        readonly launchVfx: ParticleEffects.Entry | undefined;
        readonly audioType: AudioProjectileBombardments.Entry | undefined;
    }
}
export default ProjectileBombardments;
