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
        get faction(): Factions.Entry | undefined;
        get pooledResource(): PooledResources.Entry | undefined;
        get pooledResourceFactor(): PooledResourceFactors.Entry | undefined;
    }
}
export default PooledResourceInfluenceOverrides;
