import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAiCharacterSkillTreeAgentManagers } from "./CampaignAiCharacterSkillTreeAgentManagers";
import { CampaignAiCharacterSkillTreeDistributions } from "./CampaignAiCharacterSkillTreeDistributions";
export declare namespace CampaignAiCharacterSkillTreeDistributionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agentManagerKey: string;
        readonly _distributionKey: string;
        readonly priority: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly agentManagerKey: CampaignAiCharacterSkillTreeAgentManagers.Entry | undefined;
        readonly distributionKey: CampaignAiCharacterSkillTreeDistributions.Entry | undefined;
    }
}
export default CampaignAiCharacterSkillTreeDistributionJunctions;
