import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacySimpleDeals } from "./StartPosDiplomacySimpleDeals";
export declare namespace StartPosDiplomacySimpleDealValueParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _deal: string;
        readonly parameterIndex: number;
        readonly valueParameter: number;
        constructor(collectionCache: CollectionCache, values: any);
        get deal(): StartPosDiplomacySimpleDeals.Entry | undefined;
    }
}
export default StartPosDiplomacySimpleDealValueParameters;
