import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiAgentEmbedProfiles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly freeAgentExcessCap: number;
        readonly freeAgentExcessCapPerRegionMultiplier: number;
        readonly freeAgentExcessCapPerHordeMultiplier: number;
        readonly freeAgentDefaultTypeCap: number;
        readonly freeAgentDefaultTypeCapPerRegionMultiplier: number;
        readonly freeAgentDefaultTypeCapPerHordeMultiplier: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiAgentEmbedProfiles;
