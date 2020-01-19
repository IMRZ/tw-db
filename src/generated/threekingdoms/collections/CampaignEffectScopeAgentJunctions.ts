
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
import { Agents } from "./Agents";

export namespace CampaignEffectScopeAgentJunctions {
  export const KEY = new CollectionKey("campaign_effect_scope_agent_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignEffectScopeKey: string;
    readonly _agentKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignEffectScopeKey = values["campaign_effect_scope_key"];
      this._agentKey = values["agent_key"];
    }
    
    get campaignEffectScopeKey(): CampaignEffectScopes.Entry | undefined {
      const collection = <CampaignEffectScopes.Entry[]>this.collectionCache.getCollection(CampaignEffectScopes.KEY, CampaignEffectScopes.Entry);
      return collection.find(entry => entry.key === this._campaignEffectScopeKey);
    }
    
    get agentKey(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agentKey);
    }
  }
}

export default CampaignEffectScopeAgentJunctions;
