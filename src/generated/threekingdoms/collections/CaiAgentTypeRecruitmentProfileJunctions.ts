
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiAgentRecruitmentProfiles } from "./CaiAgentRecruitmentProfiles";
import { CaiAgentTypes } from "./CaiAgentTypes";
import { CaiAgentRecruitmentTypes } from "./CaiAgentRecruitmentTypes";

export namespace CaiAgentTypeRecruitmentProfileJunctions {
  export const KEY = new CollectionKey("cai_agent_type_recruitment_profile_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _recruitmentProfileKey: string;
    readonly _agentTypeKey: string;
    readonly _recruitmentTypeKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._recruitmentProfileKey = values["recruitment_profile_key"];
      this._agentTypeKey = values["agent_type_key"];
      this._recruitmentTypeKey = values["recruitment_type_key"];
    }
    
    get recruitmentProfileKey(): CaiAgentRecruitmentProfiles.Entry | undefined {
      const collection = <CaiAgentRecruitmentProfiles.Entry[]>this.collectionCache.getCollection(CaiAgentRecruitmentProfiles.KEY, CaiAgentRecruitmentProfiles.Entry);
      return collection.find(entry => entry.key === this._recruitmentProfileKey);
    }
    
    get agentTypeKey(): CaiAgentTypes.Entry | undefined {
      const collection = <CaiAgentTypes.Entry[]>this.collectionCache.getCollection(CaiAgentTypes.KEY, CaiAgentTypes.Entry);
      return collection.find(entry => entry.key === this._agentTypeKey);
    }
    
    get recruitmentTypeKey(): CaiAgentRecruitmentTypes.Entry | undefined {
      const collection = <CaiAgentRecruitmentTypes.Entry[]>this.collectionCache.getCollection(CaiAgentRecruitmentTypes.KEY, CaiAgentRecruitmentTypes.Entry);
      return collection.find(entry => entry.key === this._recruitmentTypeKey);
    }
  }
}

export default CaiAgentTypeRecruitmentProfileJunctions;
