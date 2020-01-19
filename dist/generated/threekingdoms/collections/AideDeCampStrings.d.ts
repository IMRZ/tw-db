import { CollectionCache, CollectionKey } from "../../../common";
import { AudioVoAideDeCampStates } from "./AudioVoAideDeCampStates";
export declare namespace AideDeCampStrings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _voiceoverText: string;
        readonly text: string;
        readonly audioFilename: string;
        constructor(collectionCache: CollectionCache, values: any);
        get voiceoverText(): AudioVoAideDeCampStates.Entry | undefined;
    }
}
export default AideDeCampStrings;
