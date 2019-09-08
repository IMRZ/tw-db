import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Sounds {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly sampleName: string;
        readonly looped: boolean;
        readonly ignorePause: boolean;
        readonly prefType: string;
        readonly priority: number;
        readonly volume: number;
        readonly probability: number;
        readonly minPitch: number;
        readonly maxPitch: number;
        readonly fadeIn: number;
        readonly fadeOut: number;
        readonly startDelay: number;
        readonly triggerDelay: number;
        readonly randVolume: number;
        readonly is3D: boolean;
        readonly minDist: number;
        readonly maxDist: number;
        readonly distancePriority: number;
        readonly probabilityRadius: number;
        readonly effectLevel: number;
        readonly streamed: boolean;
        readonly pan: number;
        readonly dryLevel: number;
        readonly wetLevel: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Sounds;
