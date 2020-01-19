import { CollectionCache, CollectionKey } from "../../../common";
import { UiDisplaySets } from "./UiDisplaySets";
export declare namespace UiDisplaySetItems {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _set: string;
        readonly image: string;
        constructor(collectionCache: CollectionCache, values: any);
        get set(): UiDisplaySets.Entry | undefined;
    }
}
export default UiDisplaySetItems;
