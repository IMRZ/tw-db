import { CollectionCache, CollectionKey } from "../../../common";
import { ProvincialResourcesRequirementSetOperators } from "./ProvincialResourcesRequirementSetOperators";
export declare namespace ProvincialResourcesRequirementSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly setId: string;
        readonly _operatorKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get operatorKey(): ProvincialResourcesRequirementSetOperators.Entry | undefined;
    }
}
export default ProvincialResourcesRequirementSets;
