
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsAgentActionRecords } from "./CampaignBonusValueIdsAgentActionRecords";
import { AgentActions } from "./AgentActions";

export namespace EffectBonusValueAgentActionRecordJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_agent_action_record_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _agentActionRecord: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._agentActionRecord = values["agent_action_record"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsAgentActionRecords.Entry | undefined {
      const collection = <CampaignBonusValueIdsAgentActionRecords.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsAgentActionRecords.KEY, CampaignBonusValueIdsAgentActionRecords.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get agentActionRecord(): AgentActions.Entry | undefined {
      const collection = <AgentActions.Entry[]>this.collectionCache.getCollection(AgentActions.KEY, AgentActions.Entry);
      return collection.find(entry => entry.uniqueId === this._agentActionRecord);
    }
  }
}

export default EffectBonusValueAgentActionRecordJunctions;
