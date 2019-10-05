import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { PooledResources } from "./PooledResources";
import { PooledResourceFactors } from "./PooledResourceFactors";
export declare namespace PooledResourceInfluenceOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly _pooledResource: string;
        readonly _pooledResourceFactor: string;
        readonly influenceToPooledResourceConversionFactor: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly faction: Factions.Entry | undefined;
        readonly pooledResource: PooledResources.Entry | undefined;
        readonly pooledResourceFactor: PooledResourceFactors.Entry | undefined;
    }
}
export default PooledResourceInfluenceOverrides;
