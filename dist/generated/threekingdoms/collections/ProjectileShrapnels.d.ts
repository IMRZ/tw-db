import { CollectionCache, CollectionKey } from "../../../common";
import { ShrapnelLaunchTypeEnums } from "./ShrapnelLaunchTypeEnums";
import { Projectiles } from "./Projectiles";
export declare namespace ProjectileShrapnels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _launchType: string;
        readonly amount: number;
        readonly sectorAngle: number;
        readonly _projectile: string;
        constructor(collectionCache: CollectionCache, values: any);
        get launchType(): ShrapnelLaunchTypeEnums.Entry | undefined;
        get projectile(): Projectiles.Entry | undefined;
    }
}
export default ProjectileShrapnels;
