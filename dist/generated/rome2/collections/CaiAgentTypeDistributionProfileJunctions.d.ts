import { CollectionCache, CollectionKey } from "../../../common";
import { CaiAgentDistributionProfiles } from "./CaiAgentDistributionProfiles";
import { CaiAgentTypes } from "./CaiAgentTypes";
import { CaiAgentDistributionTypes } from "./CaiAgentDistributionTypes";
export declare namespace CaiAgentTypeDistributionProfileJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _distributionProfileKey: string;
        readonly _agentTypeKey: string;
        readonly _distributionTypeKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly distributionProfileKey: CaiAgentDistributionProfiles.Entry | undefined;
        readonly agentTypeKey: CaiAgentTypes.Entry | undefined;
        readonly distributionTypeKey: CaiAgentDistributionTypes.Entry | undefined;
    }
}
export default CaiAgentTypeDistributionProfileJunctions;
