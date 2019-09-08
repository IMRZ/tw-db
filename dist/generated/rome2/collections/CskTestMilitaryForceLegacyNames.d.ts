import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CskTestMilitaryForceLegacyNames {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _subculture: any;
        readonly localisedName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CskTestMilitaryForceLegacyNames;
