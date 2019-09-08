import { CollectionCache, CollectionKey } from "../../../common";
import { CaiAgentRecruitmentProfiles } from "./CaiAgentRecruitmentProfiles";
import { CaiAgentTypes } from "./CaiAgentTypes";
import { CaiAgentRecruitmentTypes } from "./CaiAgentRecruitmentTypes";
export declare namespace CaiAgentTypeRecruitmentProfileJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _recruitmentProfileKey: string;
        readonly _agentTypeKey: string;
        readonly _recruitmentTypeKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly recruitmentProfileKey: CaiAgentRecruitmentProfiles.Entry | undefined;
        readonly agentTypeKey: CaiAgentTypes.Entry | undefined;
        readonly recruitmentTypeKey: CaiAgentRecruitmentTypes.Entry | undefined;
    }
}
export default CaiAgentTypeRecruitmentProfileJunctions;
