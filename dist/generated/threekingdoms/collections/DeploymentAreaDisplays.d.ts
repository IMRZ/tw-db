import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";
import { CustomSplines } from "./CustomSplines";
export declare namespace DeploymentAreaDisplays {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _vfx: string;
        readonly vfxStepSize: number;
        readonly _customSpline: string;
        constructor(collectionCache: CollectionCache, values: any);
        get vfx(): ParticleEffects.Entry | undefined;
        get customSpline(): CustomSplines.Entry | undefined;
    }
}
export default DeploymentAreaDisplays;
