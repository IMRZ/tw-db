import { CollectionCache, CollectionKey } from "../../../common";
import { CdirEventDiplomaticConditions } from "./CdirEventDiplomaticConditions";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace CdirEventDiplomaticConditionSubcultures {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _diplomaticCondition: string;
        readonly _subculture: string;
        constructor(collectionCache: CollectionCache, values: any);
        get diplomaticCondition(): CdirEventDiplomaticConditions.Entry | undefined;
        get subculture(): CulturesSubcultures.Entry | undefined;
    }
}
export default CdirEventDiplomaticConditionSubcultures;
