import { CollectionCache, CollectionKey } from "../../../common";
import { CdirEventDiplomaticConditions } from "./CdirEventDiplomaticConditions";
import { Cultures } from "./Cultures";
export declare namespace CdirEventDiplomaticConditionCultures {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _diplomaticCondition: string;
        readonly _culture: string;
        constructor(collectionCache: CollectionCache, values: any);
        get diplomaticCondition(): CdirEventDiplomaticConditions.Entry | undefined;
        get culture(): Cultures.Entry | undefined;
    }
}
export default CdirEventDiplomaticConditionCultures;
