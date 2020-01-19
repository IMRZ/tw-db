
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesTechnologyResearches } from "./CaiPersonalitiesTechnologyResearches";
import { CampaignAiTechnologyPaths } from "./CampaignAiTechnologyPaths";

export namespace CaiPersonalitiesTechnologyResearchPathJunctions {
  export const KEY = new CollectionKey("cai_personalities_technology_research_path_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly _pathKey: string;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this._pathKey = values["path_key"];
      this.priority = values["priority"];
    }
    
    get key(): CaiPersonalitiesTechnologyResearches.Entry | undefined {
      const collection = <CaiPersonalitiesTechnologyResearches.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesTechnologyResearches.KEY, CaiPersonalitiesTechnologyResearches.Entry);
      return collection.find(entry => entry.key === this._key);
    }
    
    get pathKey(): CampaignAiTechnologyPaths.Entry | undefined {
      const collection = <CampaignAiTechnologyPaths.Entry[]>this.collectionCache.getCollection(CampaignAiTechnologyPaths.KEY, CampaignAiTechnologyPaths.Entry);
      return collection.find(entry => entry.key === this._pathKey);
    }
  }
}

export default CaiPersonalitiesTechnologyResearchPathJunctions;
