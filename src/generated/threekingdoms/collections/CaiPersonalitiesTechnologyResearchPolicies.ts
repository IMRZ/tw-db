
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAiTechnologyManagers } from "./CampaignAiTechnologyManagers";

export namespace CaiPersonalitiesTechnologyResearchPolicies {
  export const KEY = new CollectionKey("cai_personalities_technology_research_policies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly defaultTechnologyResearch: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this.defaultTechnologyResearch = values["default_technology_research"];
    }
    
    get key(): CampaignAiTechnologyManagers.Entry | undefined {
      const collection = <CampaignAiTechnologyManagers.Entry[]>this.collectionCache.getCollection(CampaignAiTechnologyManagers.KEY, CampaignAiTechnologyManagers.Entry);
      return collection.find(entry => entry.key === this._key);
    }
  }
}

export default CaiPersonalitiesTechnologyResearchPolicies;
