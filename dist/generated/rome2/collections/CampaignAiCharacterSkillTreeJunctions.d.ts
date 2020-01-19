import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAiCharacterSkillTreeAgentManagers } from "./CampaignAiCharacterSkillTreeAgentManagers";
export declare namespace CampaignAiCharacterSkillTreeJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agentManagerKey: string;
        readonly _skillKey: any;
        readonly priority: number;
        constructor(collectionCache: CollectionCache, values: any);
        get agentManagerKey(): CampaignAiCharacterSkillTreeAgentManagers.Entry | undefined;
    }
}
export default CampaignAiCharacterSkillTreeJunctions;
