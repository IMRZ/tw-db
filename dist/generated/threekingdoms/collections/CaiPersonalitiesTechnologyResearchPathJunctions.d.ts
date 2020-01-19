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
        get key(): CaiPersonalitiesTechnologyResearches.Entry | undefined;
        get pathKey(): CampaignAiTechnologyPaths.Entry | undefined;
    }
}
export default CaiPersonalitiesTechnologyResearchPathJunctions;
