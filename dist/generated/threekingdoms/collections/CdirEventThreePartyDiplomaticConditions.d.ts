import { CollectionCache, CollectionKey } from "../../../common";
import { CdirEventDiplomaticConditions } from "./CdirEventDiplomaticConditions";
export declare namespace CdirEventThreePartyDiplomaticConditions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _selfToOtherCriteria: string;
        readonly _targetToOtherCriteria: string;
        constructor(collectionCache: CollectionCache, values: any);
        get selfToOtherCriteria(): CdirEventDiplomaticConditions.Entry | undefined;
        get targetToOtherCriteria(): CdirEventDiplomaticConditions.Entry | undefined;
    }
}
export default CdirEventThreePartyDiplomaticConditions;
