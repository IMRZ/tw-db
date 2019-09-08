
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAiCharacterSkillTreeManagers } from "./CampaignAiCharacterSkillTreeManagers";
import { CharacterSkillNodeSets } from "./CharacterSkillNodeSets";
import { CampaignAiCharacterSkillTreeAgentManagers } from "./CampaignAiCharacterSkillTreeAgentManagers";

export namespace CampaignAiCharacterSkillTreeManagerAgentJunctions {
  export const KEY = new CollectionKey("campaign_ai_character_skill_tree_manager_agent_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _managerKey: string;
    readonly _agentKey: string;
    readonly _agentManagerKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._managerKey = values["manager_key"];
      this._agentKey = values["agent_key"];
      this._agentManagerKey = values["agent_manager_key"];
    }
    
    get managerKey(): CampaignAiCharacterSkillTreeManagers.Entry | undefined {
      const collection = <CampaignAiCharacterSkillTreeManagers.Entry[]>this.collectionCache.getCollection(CampaignAiCharacterSkillTreeManagers.KEY, CampaignAiCharacterSkillTreeManagers.Entry);
      return collection.find(entry => entry.key === this._managerKey);
    }
    
    get agentKey(): CharacterSkillNodeSets.Entry | undefined {
      const collection = <CharacterSkillNodeSets.Entry[]>this.collectionCache.getCollection(CharacterSkillNodeSets.KEY, CharacterSkillNodeSets.Entry);
      return collection.find(entry => entry.key === this._agentKey);
    }
    
    get agentManagerKey(): CampaignAiCharacterSkillTreeAgentManagers.Entry | undefined {
      const collection = <CampaignAiCharacterSkillTreeAgentManagers.Entry[]>this.collectionCache.getCollection(CampaignAiCharacterSkillTreeAgentManagers.KEY, CampaignAiCharacterSkillTreeAgentManagers.Entry);
      return collection.find(entry => entry.key === this._agentManagerKey);
    }
  }
}

export default CampaignAiCharacterSkillTreeManagerAgentJunctions;
