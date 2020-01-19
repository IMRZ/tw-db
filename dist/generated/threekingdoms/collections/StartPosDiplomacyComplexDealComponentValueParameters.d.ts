import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacyComplexDealComponents } from "./StartPosDiplomacyComplexDealComponents";
export declare namespace StartPosDiplomacyComplexDealComponentValueParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _component: string;
        readonly parameterIndex: number;
        readonly valueParameter: number;
        constructor(collectionCache: CollectionCache, values: any);
        get component(): StartPosDiplomacyComplexDealComponents.Entry | undefined;
    }
}
export default StartPosDiplomacyComplexDealComponentValueParameters;
