import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UiInfoRitualTargetCriterias {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly icon: string;
        readonly localisedText: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UiInfoRitualTargetCriterias;
