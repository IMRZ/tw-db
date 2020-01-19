import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AudioBattleEnvironmentOneShots {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly name: string;
        readonly event: string;
        readonly minTime: number;
        readonly maxTime: number;
        readonly minDistance: number;
        readonly maxDistance: number;
        readonly minHeight: number;
        readonly maxHeight: number;
        readonly requiredIntensity: number;
        readonly canWeatherDisable: boolean;
        readonly probability: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AudioBattleEnvironmentOneShots;
