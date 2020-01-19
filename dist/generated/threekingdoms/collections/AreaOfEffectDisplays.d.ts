import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";
import { CustomSplines } from "./CustomSplines";
export declare namespace AreaOfEffectDisplays {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly decal: string;
        readonly _vfxRing: string;
        readonly _vfxCentral: string;
        readonly splineColR: number;
        readonly splineColG: number;
        readonly splineColB: number;
        readonly splineOorColR: number;
        readonly splineOorColG: number;
        readonly splineOorColB: number;
        readonly splineAnimationSpeed: number;
        readonly splineTileCount: number;
        readonly compositeScene: string;
        readonly isTargettingPerEntity: boolean;
        readonly vfxRingSegmentLength: number;
        readonly _customSpline: string;
        constructor(collectionCache: CollectionCache, values: any);
        get vfxRing(): ParticleEffects.Entry | undefined;
        get vfxCentral(): ParticleEffects.Entry | undefined;
        get customSpline(): CustomSplines.Entry | undefined;
    }
}
export default AreaOfEffectDisplays;
