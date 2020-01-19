import { CollectionCache, CollectionKey } from "../../../common";
import { FactionResourcesRequirementSets } from "./FactionResourcesRequirementSets";
import { FactionResourceIds } from "./FactionResourceIds";
export declare namespace FactionResourcesRequirementSetToResourcesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _setId: string;
        readonly _factionResourceId: string;
        constructor(collectionCache: CollectionCache, values: any);
        get setId(): FactionResourcesRequirementSets.Entry | undefined;
        get factionResourceId(): FactionResourceIds.Entry | undefined;
    }
}
export default FactionResourcesRequirementSetToResourcesJunctions;
