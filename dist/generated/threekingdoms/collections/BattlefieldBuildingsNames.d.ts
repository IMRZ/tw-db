import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattlefieldBuildingsNames {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly onscreenName: string;
        readonly key: string;
        readonly globalEffectsDescription: string;
        readonly localEffectsDescription: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattlefieldBuildingsNames;
