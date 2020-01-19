import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAiCharacterSkillTreeManagers } from "./CampaignAiCharacterSkillTreeManagers";
import { CharacterSkillNodeSets } from "./CharacterSkillNodeSets";
import { CampaignAiCharacterSkillTreeAgentManagers } from "./CampaignAiCharacterSkillTreeAgentManagers";
export declare namespace CampaignAiCharacterSkillTreeManagerAgentJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _managerKey: string;
        readonly _agentKey: string;
        readonly _agentManagerKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get managerKey(): CampaignAiCharacterSkillTreeManagers.Entry | undefined;
        get agentKey(): CharacterSkillNodeSets.Entry | undefined;
        get agentManagerKey(): CampaignAiCharacterSkillTreeAgentManagers.Entry | undefined;
    }
}
export default CampaignAiCharacterSkillTreeManagerAgentJunctions;
