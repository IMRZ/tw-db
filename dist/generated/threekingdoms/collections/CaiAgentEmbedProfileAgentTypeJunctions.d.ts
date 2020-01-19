import { CollectionCache, CollectionKey } from "../../../common";
import { CaiAgentEmbedProfiles } from "./CaiAgentEmbedProfiles";
import { CaiAgentTypes } from "./CaiAgentTypes";
export declare namespace CaiAgentEmbedProfileAgentTypeJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agentEmbedProfileKey: string;
        readonly _agentTypeKey: string;
        readonly freeAgentTypeCap: number;
        readonly freeAgentTypeCapPerRegionMultiplier: number;
        readonly freeAgentTypeCapPerHordeMultiplier: number;
        readonly exemptFromFreeAgentCaps: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get agentEmbedProfileKey(): CaiAgentEmbedProfiles.Entry | undefined;
        get agentTypeKey(): CaiAgentTypes.Entry | undefined;
    }
}
export default CaiAgentEmbedProfileAgentTypeJunctions;
