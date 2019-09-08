import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAiTechnologyPaths } from "./CampaignAiTechnologyPaths";
import { Technologies } from "./Technologies";
export declare namespace CampaignAiTechnologyPathJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _pathKey: string;
        readonly _technologyKey: string;
        readonly priority: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly pathKey: CampaignAiTechnologyPaths.Entry | undefined;
        readonly technologyKey: Technologies.Entry | undefined;
    }
}
export default CampaignAiTechnologyPathJunctions;
