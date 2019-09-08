import { CollectionCache, CollectionKey } from "../../../common";
import { AgentSubtypes } from "./AgentSubtypes";
export declare namespace CampaignAgentSubtypeBattleTags {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agentSubtype: string;
        readonly battleTag: string;
        readonly attacking: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly agentSubtype: AgentSubtypes.Entry | undefined;
    }
}
export default CampaignAgentSubtypeBattleTags;
