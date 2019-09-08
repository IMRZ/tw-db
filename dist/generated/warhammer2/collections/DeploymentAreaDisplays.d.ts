import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";
export declare namespace DeploymentAreaDisplays {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _vfx: string;
        readonly vfxStepSize: number;
        readonly splineHeight: number;
        readonly material: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly vfx: ParticleEffects.Entry | undefined;
    }
}
export default DeploymentAreaDisplays;
