import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
import { Agents } from "./Agents";
export declare namespace CampaignEffectScopeAgentJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignEffectScopeKey: string;
        readonly _agentKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignEffectScopeKey(): CampaignEffectScopes.Entry | undefined;
        get agentKey(): Agents.Entry | undefined;
    }
}
export default CampaignEffectScopeAgentJunctions;
