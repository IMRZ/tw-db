import { CollectionCache, CollectionKey } from "../../../common";
import { UiUnitGroupParents } from "./UiUnitGroupParents";
export declare namespace UiUnitGroupings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreen: string;
        readonly icon: string;
        readonly tooltip: string;
        readonly _parentGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        get parentGroup(): UiUnitGroupParents.Entry | undefined;
    }
}
export default UiUnitGroupings;
