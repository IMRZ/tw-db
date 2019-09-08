
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAiCharacterSkillTreeAgentManagers } from "./CampaignAiCharacterSkillTreeAgentManagers";
import { CampaignAiCharacterSkillTreeDistributions } from "./CampaignAiCharacterSkillTreeDistributions";

export namespace CampaignAiCharacterSkillTreeDistributionJunctions {
  export const KEY = new CollectionKey("campaign_ai_character_skill_tree_distribution_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _agentManagerKey: string;
    readonly _distributionKey: string;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._agentManagerKey = values["agent_manager_key"];
      this._distributionKey = values["distribution_key"];
      this.priority = values["priority"];
    }
    
    get agentManagerKey(): CampaignAiCharacterSkillTreeAgentManagers.Entry | undefined {
      const collection = <CampaignAiCharacterSkillTreeAgentManagers.Entry[]>this.collectionCache.getCollection(CampaignAiCharacterSkillTreeAgentManagers.KEY, CampaignAiCharacterSkillTreeAgentManagers.Entry);
      return collection.find(entry => entry.key === this._agentManagerKey);
    }
    
    get distributionKey(): CampaignAiCharacterSkillTreeDistributions.Entry | undefined {
      const collection = <CampaignAiCharacterSkillTreeDistributions.Entry[]>this.collectionCache.getCollection(CampaignAiCharacterSkillTreeDistributions.KEY, CampaignAiCharacterSkillTreeDistributions.Entry);
      return collection.find(entry => entry.key === this._distributionKey);
    }
  }
}

export default CampaignAiCharacterSkillTreeDistributionJunctions;
