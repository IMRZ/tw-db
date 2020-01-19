import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacyComplexDealComponents } from "./StartPosDiplomacyComplexDealComponents";
import { StartPosFactions } from "./StartPosFactions";
export declare namespace StartPosDiplomacyComplexDealComponentFactionParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _component: string;
        readonly parameterIndex: number;
        readonly _factionParameter: number;
        constructor(collectionCache: CollectionCache, values: any);
        get component(): StartPosDiplomacyComplexDealComponents.Entry | undefined;
        get factionParameter(): StartPosFactions.Entry | undefined;
    }
}
export default StartPosDiplomacyComplexDealComponentFactionParameters;
