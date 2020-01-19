import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BuildingUiGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreenName: string;
        readonly iconPath: string;
        readonly order: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BuildingUiGroups;
