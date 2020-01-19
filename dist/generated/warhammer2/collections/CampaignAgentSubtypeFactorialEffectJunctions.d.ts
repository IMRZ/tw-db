import { CollectionCache, CollectionKey } from "../../../common";
import { AgentSubtypes } from "./AgentSubtypes";
import { FactorialEffects } from "./FactorialEffects";
import { CampaignFactorialScopes } from "./CampaignFactorialScopes";
export declare namespace CampaignAgentSubtypeFactorialEffectJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly _agentSubtype: string;
        readonly _factorialEffect: string;
        readonly value: number;
        readonly _scope: string;
        constructor(collectionCache: CollectionCache, values: any);
        get agentSubtype(): AgentSubtypes.Entry | undefined;
        get factorialEffect(): FactorialEffects.Entry | undefined;
        get scope(): CampaignFactorialScopes.Entry | undefined;
    }
}
export default CampaignAgentSubtypeFactorialEffectJunctions;
