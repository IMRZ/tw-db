import { CollectionCache, CollectionKey } from "../../../common";
import { UiTextReplacements } from "./UiTextReplacements";
export declare namespace LoadingScreenTexts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _textLookup: string;
        readonly isBattleOnly: boolean;
        readonly isCampaignOnly: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get textLookup(): UiTextReplacements.Entry | undefined;
    }
}
export default LoadingScreenTexts;
