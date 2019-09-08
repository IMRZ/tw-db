
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAiCharacterSkillTreeAgentManagers } from "./CampaignAiCharacterSkillTreeAgentManagers";

export namespace CampaignAiCharacterSkillTreeJunctions {
  export const KEY = new CollectionKey("campaign_ai_character_skill_tree_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _agentManagerKey: string;
    readonly _skillKey: any;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._agentManagerKey = values["agent_manager_key"];
      this._skillKey = values["skill_key"];
      this.priority = values["priority"];
    }
    
    get agentManagerKey(): CampaignAiCharacterSkillTreeAgentManagers.Entry | undefined {
      const collection = <CampaignAiCharacterSkillTreeAgentManagers.Entry[]>this.collectionCache.getCollection(CampaignAiCharacterSkillTreeAgentManagers.KEY, CampaignAiCharacterSkillTreeAgentManagers.Entry);
      return collection.find(entry => entry.key === this._agentManagerKey);
    }
  }
}

export default CampaignAiCharacterSkillTreeJunctions;
