import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattleCameraShakeParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly octaves: number;
        readonly octaveAmplitudeMultiplier: number;
        readonly octaveFrequencyMultiplier: number;
        readonly horizontalAmplitude: number;
        readonly horizontalFrequency: number;
        readonly verticalAmplitude: number;
        readonly verticalFrequency: number;
        readonly rollAmplitude: number;
        readonly rollFrequency: number;
        readonly pitchAmplitude: number;
        readonly pitchFrequency: number;
        readonly yawAmplitude: number;
        readonly yawFrequency: number;
        readonly attack: number;
        readonly decay: number;
        readonly sustain: number;
        readonly release: number;
        readonly sustainMultiplier: number;
        readonly fallOffDistance: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattleCameraShakeParameters;
