import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacyComplexDealComponents } from "./StartPosDiplomacyComplexDealComponents";
import { StartPosDiplomacyDeals } from "./StartPosDiplomacyDeals";
export declare namespace StartPosDiplomacyComplexDealComponentDealsParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _component: string;
        readonly parameterIndex: number;
        readonly _dealParameter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get component(): StartPosDiplomacyComplexDealComponents.Entry | undefined;
        get dealParameter(): StartPosDiplomacyDeals.Entry | undefined;
    }
}
export default StartPosDiplomacyComplexDealComponentDealsParameters;
