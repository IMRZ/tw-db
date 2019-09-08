import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingChainAvailabilitySetIds } from "./BuildingChainAvailabilitySetIds";
import { BuildingChains } from "./BuildingChains";
export declare namespace BuildingChainAvailabilitySets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _id: string;
        readonly _buildingChain: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly id: BuildingChainAvailabilitySetIds.Entry | undefined;
        readonly buildingChain: BuildingChains.Entry | undefined;
    }
}
export default BuildingChainAvailabilitySets;
