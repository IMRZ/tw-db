import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAiTechnologyManagers } from "./CampaignAiTechnologyManagers";
export declare namespace CaiPersonalitiesTechnologyResearchPolicies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly defaultTechnologyResearch: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly key: CampaignAiTechnologyManagers.Entry | undefined;
    }
}
export default CaiPersonalitiesTechnologyResearchPolicies;
