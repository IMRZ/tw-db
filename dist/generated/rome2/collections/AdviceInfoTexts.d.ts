import { CollectionCache, CollectionKey } from "../../../common";
import { AdviceLevels } from "./AdviceLevels";
export declare namespace AdviceInfoTexts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _adviceLevelLookup: number;
        readonly localisedText: string;
        readonly persistant: boolean;
        readonly showOnNavigate: boolean;
        readonly showInstant: boolean;
        readonly isHeader: boolean;
        readonly navigationOrder: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly adviceLevelLookup: AdviceLevels.Entry | undefined;
    }
}
export default AdviceInfoTexts;
