
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsAgentSubtypeLoyaltyFactorJunctions } from "./CampaignBonusValueIdsAgentSubtypeLoyaltyFactorJunctions";
import { AgentSubtypeLoyaltyFactorJunctions } from "./AgentSubtypeLoyaltyFactorJunctions";

export namespace EffectBonusValueAgentSubtypeLoyaltyFactorJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_agent_subtype_loyalty_factor_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _agentSubtypeLoyaltyFactorJunction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._agentSubtypeLoyaltyFactorJunction = values["agent_subtype_loyalty_factor_junction"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsAgentSubtypeLoyaltyFactorJunctions.Entry | undefined {
      const collection = <CampaignBonusValueIdsAgentSubtypeLoyaltyFactorJunctions.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsAgentSubtypeLoyaltyFactorJunctions.KEY, CampaignBonusValueIdsAgentSubtypeLoyaltyFactorJunctions.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get agentSubtypeLoyaltyFactorJunction(): AgentSubtypeLoyaltyFactorJunctions.Entry | undefined {
      const collection = <AgentSubtypeLoyaltyFactorJunctions.Entry[]>this.collectionCache.getCollection(AgentSubtypeLoyaltyFactorJunctions.KEY, AgentSubtypeLoyaltyFactorJunctions.Entry);
      return collection.find(entry => entry.key === this._agentSubtypeLoyaltyFactorJunction);
    }
  }
}

export default EffectBonusValueAgentSubtypeLoyaltyFactorJunctions;
