
import { CollectionCache, CollectionKey } from "../../../common";
import { AgentSubtypes } from "./AgentSubtypes";

export namespace CampaignAgentSubtypeBattleTags {
  export const KEY = new CollectionKey("campaign_agent_subtype_battle_tags");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _agentSubtype: string;
    readonly battleTag: string;
    readonly attacking: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._agentSubtype = values["agent_subtype"];
      this.battleTag = values["battle_tag"];
      this.attacking = !!values["attacking"];
    }
    
    get agentSubtype(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._agentSubtype);
    }
  }
}

export default CampaignAgentSubtypeBattleTags;
