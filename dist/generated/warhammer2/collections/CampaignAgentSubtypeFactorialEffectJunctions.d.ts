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
        readonly agentSubtype: AgentSubtypes.Entry | undefined;
        readonly factorialEffect: FactorialEffects.Entry | undefined;
        readonly scope: CampaignFactorialScopes.Entry | undefined;
    }
}
export default CampaignAgentSubtypeFactorialEffectJunctions;
