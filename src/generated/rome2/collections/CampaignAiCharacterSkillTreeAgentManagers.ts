
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignAiCharacterSkillTreeAgentManagers {
  export const KEY = new CollectionKey("campaign_ai_character_skill_tree_agent_managers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignAiCharacterSkillTreeAgentManagers;
