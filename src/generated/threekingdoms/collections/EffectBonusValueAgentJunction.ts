
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsAgent } from "./CampaignBonusValueIdsAgent";
import { Agents } from "./Agents";

export namespace EffectBonusValueAgentJunction {
  export const KEY = new CollectionKey("effect_bonus_value_agent_junction");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _agent: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._agent = values["agent"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsAgent.Entry | undefined {
      const collection = <CampaignBonusValueIdsAgent.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsAgent.KEY, CampaignBonusValueIdsAgent.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get agent(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agent);
    }
  }
}

export default EffectBonusValueAgentJunction;
