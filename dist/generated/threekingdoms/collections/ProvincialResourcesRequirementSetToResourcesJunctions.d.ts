import { CollectionCache, CollectionKey } from "../../../common";
import { ProvincialResourcesRequirementSets } from "./ProvincialResourcesRequirementSets";
import { ProvincialResourceIds } from "./ProvincialResourceIds";
export declare namespace ProvincialResourcesRequirementSetToResourcesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _setId: string;
        readonly _provincialResourceId: string;
        constructor(collectionCache: CollectionCache, values: any);
        get setId(): ProvincialResourcesRequirementSets.Entry | undefined;
        get provincialResourceId(): ProvincialResourceIds.Entry | undefined;
    }
}
export default ProvincialResourcesRequirementSetToResourcesJunctions;
