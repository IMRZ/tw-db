import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesTechnologyResearches } from "./CaiPersonalitiesTechnologyResearches";
import { CampaignAiTechnologyPaths } from "./CampaignAiTechnologyPaths";
export declare namespace CaiPersonalitiesTechnologyResearchPathJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly _pathKey: string;
        readonly priority: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly key: CaiPersonalitiesTechnologyResearches.Entry | undefined;
        readonly pathKey: CampaignAiTechnologyPaths.Entry | undefined;
    }
}
export default CaiPersonalitiesTechnologyResearchPathJunctions;
