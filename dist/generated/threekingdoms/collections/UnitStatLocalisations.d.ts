import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitStatLocalisations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly statKey: string;
        readonly onscreenName: string;
        readonly tooltipText: string;
        readonly abbreviatedName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitStatLocalisations;
