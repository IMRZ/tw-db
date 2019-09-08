import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";
export declare namespace AreaOfEffectDisplays {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly spline: string;
        readonly decal: string;
        readonly _vfxRing: string;
        readonly _vfxCentral: string;
        readonly splineWidth: number;
        readonly splineColR: number;
        readonly splineColG: number;
        readonly splineColB: number;
        readonly splineOorColR: number;
        readonly splineOorColG: number;
        readonly splineOorColB: number;
        readonly splineVertical: boolean;
        readonly splineAnimationSpeed: number;
        readonly splineTileCount: number;
        readonly compositeScene: string;
        readonly isTargettingPerEntity: boolean;
        readonly vfxRingSegmentLength: number;
        readonly useModelTime: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly vfxRing: ParticleEffects.Entry | undefined;
        readonly vfxCentral: ParticleEffects.Entry | undefined;
    }
}
export default AreaOfEffectDisplays;
