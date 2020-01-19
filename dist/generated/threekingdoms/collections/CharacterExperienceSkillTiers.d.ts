import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { Campaigns } from "./Campaigns";
export declare namespace CharacterExperienceSkillTiers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agentKey: string;
        readonly skillRank: number;
        readonly experienceThreshold: number;
        readonly skillPoints: number;
        readonly _optionalCampaignKey: string;
        readonly forArmy: boolean;
        readonly forNavy: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get agentKey(): Agents.Entry | undefined;
        get optionalCampaignKey(): Campaigns.Entry | undefined;
    }
}
export default CharacterExperienceSkillTiers;
