import { CollectionCache, CollectionKey } from "../../../common";
import { AudioAreaOfEffectPositioningTypes } from "./AudioAreaOfEffectPositioningTypes";
export declare namespace AudioAreaOfEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly name: string;
        readonly eventStart: string;
        readonly eventStop: string;
        readonly _positioningType: string;
        readonly maxDistance: number;
        readonly useReverb: boolean;
        readonly velocityRtpc: string;
        readonly switch: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly positioningType: AudioAreaOfEffectPositioningTypes.Entry | undefined;
    }
}
export default AudioAreaOfEffects;
