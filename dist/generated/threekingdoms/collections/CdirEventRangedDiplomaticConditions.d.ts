import { CollectionCache, CollectionKey } from "../../../common";
import { CdirEventDiplomaticConditions } from "./CdirEventDiplomaticConditions";
export declare namespace CdirEventRangedDiplomaticConditions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _diplomaticCondition: string;
        readonly min: number;
        readonly max: number;
        constructor(collectionCache: CollectionCache, values: any);
        get diplomaticCondition(): CdirEventDiplomaticConditions.Entry | undefined;
    }
}
export default CdirEventRangedDiplomaticConditions;
