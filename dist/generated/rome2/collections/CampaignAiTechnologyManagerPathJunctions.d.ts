import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAiTechnologyManagers } from "./CampaignAiTechnologyManagers";
import { CampaignAiTechnologyPaths } from "./CampaignAiTechnologyPaths";
export declare namespace CampaignAiTechnologyManagerPathJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _managerKey: string;
        readonly _pathKey: string;
        readonly priority: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly managerKey: CampaignAiTechnologyManagers.Entry | undefined;
        readonly pathKey: CampaignAiTechnologyPaths.Entry | undefined;
    }
}
export default CampaignAiTechnologyManagerPathJunctions;
