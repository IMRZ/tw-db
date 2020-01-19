import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacyComplexDealComponents } from "./StartPosDiplomacyComplexDealComponents";
import { StartPosFactions } from "./StartPosFactions";
export declare namespace StartPosDiplomacyComplexDealComponentAllianceParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _component: string;
        readonly parameterIndex: number;
        readonly _allianceFactionParameter: number;
        constructor(collectionCache: CollectionCache, values: any);
        get component(): StartPosDiplomacyComplexDealComponents.Entry | undefined;
        get allianceFactionParameter(): StartPosFactions.Entry | undefined;
    }
}
export default StartPosDiplomacyComplexDealComponentAllianceParameters;
