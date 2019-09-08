import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace LightingSetups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly name: string;
        readonly depthBias: number;
        readonly dirx: number;
        readonly diry: number;
        readonly dirz: number;
        readonly colourScale: number;
        readonly colourR: number;
        readonly colourG: number;
        readonly colourB: number;
        readonly colourTopR: number;
        readonly colourTopG: number;
        readonly colourTopB: number;
        readonly colourBottomR: number;
        readonly colourBottomG: number;
        readonly colourBottomB: number;
        readonly gamma: number;
        readonly bloomMultiplier: number;
        readonly bloomAngle1: number;
        readonly bloomAngle2: number;
        readonly bloomScale1: number;
        readonly bloomScale2: number;
        readonly mainBloomScalex: number;
        readonly mainBloomScaley: number;
        readonly mainBloomDistribution: number;
        readonly highPass: number;
        readonly colourFogR: number;
        readonly colourFogG: number;
        readonly colourFogB: number;
        readonly fogNear: number;
        readonly fogFar: number;
        readonly fogDensity: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default LightingSetups;
