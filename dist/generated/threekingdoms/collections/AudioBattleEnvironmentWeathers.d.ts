import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AudioBattleEnvironmentWeathers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly name: string;
        readonly windIntensityModifier: number;
        readonly disablesEnvironment: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AudioBattleEnvironmentWeathers;
