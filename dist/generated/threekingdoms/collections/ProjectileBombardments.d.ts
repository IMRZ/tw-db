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
        get projectileType(): Projectiles.Entry | undefined;
        get launchSource(): ProjectileBombardmentLaunchSources.Entry | undefined;
        get launchVfx(): ParticleEffects.Entry | undefined;
        get audioType(): AudioProjectileBombardments.Entry | undefined;
    }
}
export default ProjectileBombardments;
