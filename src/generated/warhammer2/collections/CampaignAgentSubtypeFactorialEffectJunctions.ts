
import { CollectionCache, CollectionKey } from "../../../common";
import { AgentSubtypes } from "./AgentSubtypes";
import { FactorialEffects } from "./FactorialEffects";
import { CampaignFactorialScopes } from "./CampaignFactorialScopes";

export namespace CampaignAgentSubtypeFactorialEffectJunctions {
  export const KEY = new CollectionKey("campaign_agent_subtype_factorial_effect_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly _agentSubtype: string;
    readonly _factorialEffect: string;
    readonly value: number;
    readonly _scope: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._agentSubtype = values["agent_subtype"];
      this._factorialEffect = values["factorial_effect"];
      this.value = values["value"];
      this._scope = values["scope"];
    }
    
    get agentSubtype(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._agentSubtype);
    }
    
    get factorialEffect(): FactorialEffects.Entry | undefined {
      const collection = <FactorialEffects.Entry[]>this.collectionCache.getCollection(FactorialEffects.KEY, FactorialEffects.Entry);
      return collection.find(entry => entry.key === this._factorialEffect);
    }
    
    get scope(): CampaignFactorialScopes.Entry | undefined {
      const collection = <CampaignFactorialScopes.Entry[]>this.collectionCache.getCollection(CampaignFactorialScopes.KEY, CampaignFactorialScopes.Entry);
      return collection.find(entry => entry.key === this._scope);
    }
  }
}

export default CampaignAgentSubtypeFactorialEffectJunctions;
