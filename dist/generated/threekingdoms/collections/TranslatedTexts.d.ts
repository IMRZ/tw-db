import { CollectionCache, CollectionKey } from "../../../common";
import { Languages } from "./Languages";
export declare namespace TranslatedTexts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _language: string;
        readonly lastEnglishText: string;
        readonly translatedText: string;
        readonly requiresTranslation: boolean;
        readonly requiresRecording: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get language(): Languages.Entry | undefined;
    }
}
export default TranslatedTexts;
