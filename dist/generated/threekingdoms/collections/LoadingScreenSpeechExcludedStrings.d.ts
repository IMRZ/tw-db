import { CollectionCache, CollectionKey } from "../../../common";
import { LoadingScreenSpeechStrings } from "./LoadingScreenSpeechStrings";
import { AudioVoActors } from "./AudioVoActors";
export declare namespace LoadingScreenSpeechExcludedStrings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _loadingScreenSpeechString: string;
        readonly _audioVoActor: string;
        constructor(collectionCache: CollectionCache, values: any);
        get loadingScreenSpeechString(): LoadingScreenSpeechStrings.Entry | undefined;
        get audioVoActor(): AudioVoActors.Entry | undefined;
    }
}
export default LoadingScreenSpeechExcludedStrings;
