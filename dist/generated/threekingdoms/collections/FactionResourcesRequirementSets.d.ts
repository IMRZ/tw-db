import { CollectionCache, CollectionKey } from "../../../common";
import { FactionResourcesRequirementSetOperators } from "./FactionResourcesRequirementSetOperators";
export declare namespace FactionResourcesRequirementSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly setId: string;
        readonly _operatorKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get operatorKey(): FactionResourcesRequirementSetOperators.Entry | undefined;
    }
}
export default FactionResourcesRequirementSets;
