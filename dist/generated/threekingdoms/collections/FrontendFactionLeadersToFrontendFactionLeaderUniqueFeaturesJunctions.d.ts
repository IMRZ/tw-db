import { CollectionCache, CollectionKey } from "../../../common";
import { FrontendFactionLeaders } from "./FrontendFactionLeaders";
import { FrontendFactionLeaderUniqueFeatures } from "./FrontendFactionLeaderUniqueFeatures";
export declare namespace FrontendFactionLeadersToFrontendFactionLeaderUniqueFeaturesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _frontendFactionLeader: string;
        readonly _frontendFactionLeaderUniqueFeature: string;
        constructor(collectionCache: CollectionCache, values: any);
        get frontendFactionLeader(): FrontendFactionLeaders.Entry | undefined;
        get frontendFactionLeaderUniqueFeature(): FrontendFactionLeaderUniqueFeatures.Entry | undefined;
    }
}
export default FrontendFactionLeadersToFrontendFactionLeaderUniqueFeaturesJunctions;
