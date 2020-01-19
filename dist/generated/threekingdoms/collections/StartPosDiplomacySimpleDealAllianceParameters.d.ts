import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacySimpleDeals } from "./StartPosDiplomacySimpleDeals";
import { StartPosFactions } from "./StartPosFactions";
export declare namespace StartPosDiplomacySimpleDealAllianceParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _deal: string;
        readonly parameterIndex: number;
        readonly _allianceFactionParameter: number;
        constructor(collectionCache: CollectionCache, values: any);
        get deal(): StartPosDiplomacySimpleDeals.Entry | undefined;
        get allianceFactionParameter(): StartPosFactions.Entry | undefined;
    }
}
export default StartPosDiplomacySimpleDealAllianceParameters;
