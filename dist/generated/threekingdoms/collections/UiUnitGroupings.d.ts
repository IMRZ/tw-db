import { CollectionCache, CollectionKey } from "../../../common";
import { UiUnitGroupParents } from "./UiUnitGroupParents";
import { UiColours } from "./UiColours";
export declare namespace UiUnitGroupings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreen: string;
        readonly icon: string;
        readonly tooltip: string;
        readonly _parentGroup: string;
        readonly _colour: string;
        constructor(collectionCache: CollectionCache, values: any);
        get parentGroup(): UiUnitGroupParents.Entry | undefined;
        get colour(): UiColours.Entry | undefined;
    }
}
export default UiUnitGroupings;
