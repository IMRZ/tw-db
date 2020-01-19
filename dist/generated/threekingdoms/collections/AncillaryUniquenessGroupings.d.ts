import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AncillaryUniquenessGroupings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly groupKey: string;
        readonly uniquenessMin: number;
        readonly uniquenessMax: number;
        readonly colR: number;
        readonly colG: number;
        readonly colB: number;
        readonly uiState: string;
        readonly onscreenName: string;
        readonly description: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AncillaryUniquenessGroupings;
