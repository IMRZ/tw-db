import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacySimpleDeals } from "./StartPosDiplomacySimpleDeals";
import { StartPosDiplomacyDeals } from "./StartPosDiplomacyDeals";
export declare namespace StartPosDiplomacySimpleDealDealParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _deal: string;
        readonly parameterIndex: number;
        readonly _dealParameter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get deal(): StartPosDiplomacySimpleDeals.Entry | undefined;
        get dealParameter(): StartPosDiplomacyDeals.Entry | undefined;
    }
}
export default StartPosDiplomacySimpleDealDealParameters;
