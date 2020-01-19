import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AudioBattleEnvironments {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly name: string;
        readonly isDefault: boolean;
        readonly globalWaterRtpc: string;
        readonly globalPlainsRtpc: string;
        readonly globalForestRtpc: string;
        readonly globalUrbanRtpc: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AudioBattleEnvironments;
