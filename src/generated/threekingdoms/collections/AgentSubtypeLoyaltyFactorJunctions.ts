
import { CollectionCache, CollectionKey } from "../../../common";
import { AgentSubtypes } from "./AgentSubtypes";
import { LoyaltyFactors } from "./LoyaltyFactors";

export namespace AgentSubtypeLoyaltyFactorJunctions {
  export const KEY = new CollectionKey("agent_subtype_loyalty_factor_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _agentSubtype: string;
    readonly _loyaltyFactor: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._agentSubtype = values["agent_subtype"];
      this._loyaltyFactor = values["loyalty_factor"];
    }
    
    get agentSubtype(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._agentSubtype);
    }
    
    get loyaltyFactor(): LoyaltyFactors.Entry | undefined {
      const collection = <LoyaltyFactors.Entry[]>this.collectionCache.getCollection(LoyaltyFactors.KEY, LoyaltyFactors.Entry);
      return collection.find(entry => entry.key === this._loyaltyFactor);
    }
  }
}

export default AgentSubtypeLoyaltyFactorJunctions;
