import { CollectionCache, CollectionKey } from "../../../common";
import { Technologies } from "./Technologies";
import { AudioUiCategories } from "./AudioUiCategories";
export declare namespace AudioTechnologies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _technology: string;
        readonly _uiAudio: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly technology: Technologies.Entry | undefined;
        readonly uiAudio: AudioUiCategories.Entry | undefined;
    }
}
export default AudioTechnologies;
