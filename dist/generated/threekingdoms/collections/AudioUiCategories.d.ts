import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AudioUiCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly leftClick: string;
        readonly rightClick: string;
        readonly mouseOn: string;
        readonly mouseOff: string;
        readonly dragStart: string;
        readonly dragStop: string;
        readonly shortcut: string;
        readonly panelOpened: string;
        readonly panelClosed: string;
        readonly doubleLeftClick: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AudioUiCategories;
