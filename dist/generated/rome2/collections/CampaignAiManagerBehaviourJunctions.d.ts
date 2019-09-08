import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAiManagers } from "./CampaignAiManagers";
import { CampaignAiBehaviours } from "./CampaignAiBehaviours";
export declare namespace CampaignAiManagerBehaviourJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _manager: string;
        readonly _behaviour: string;
        readonly priority: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly manager: CampaignAiManagers.Entry | undefined;
        readonly behaviour: CampaignAiBehaviours.Entry | undefined;
    }
}
export default CampaignAiManagerBehaviourJunctions;
