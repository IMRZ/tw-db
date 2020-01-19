
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsAgentSubtypes } from "./CampaignBonusValueIdsAgentSubtypes";
import { AgentSubtypes } from "./AgentSubtypes";

export namespace EffectBonusValueAgentSubtypeJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_agent_subtype_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _subtype: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._subtype = values["subtype"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsAgentSubtypes.Entry | undefined {
      const collection = <CampaignBonusValueIdsAgentSubtypes.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsAgentSubtypes.KEY, CampaignBonusValueIdsAgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get subtype(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._subtype);
    }
  }
}

export default EffectBonusValueAgentSubtypeJunctions;
