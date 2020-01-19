
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAiTechnologyManagers } from "./CampaignAiTechnologyManagers";
import { CampaignAiTechnologyPaths } from "./CampaignAiTechnologyPaths";

export namespace CampaignAiTechnologyManagerPathJunctions {
  export const KEY = new CollectionKey("campaign_ai_technology_manager_path_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _managerKey: string;
    readonly _pathKey: string;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._managerKey = values["manager_key"];
      this._pathKey = values["path_key"];
      this.priority = values["priority"];
    }
    
    get managerKey(): CampaignAiTechnologyManagers.Entry | undefined {
      const collection = <CampaignAiTechnologyManagers.Entry[]>this.collectionCache.getCollection(CampaignAiTechnologyManagers.KEY, CampaignAiTechnologyManagers.Entry);
      return collection.find(entry => entry.key === this._managerKey);
    }
    
    get pathKey(): CampaignAiTechnologyPaths.Entry | undefined {
      const collection = <CampaignAiTechnologyPaths.Entry[]>this.collectionCache.getCollection(CampaignAiTechnologyPaths.KEY, CampaignAiTechnologyPaths.Entry);
      return collection.find(entry => entry.key === this._pathKey);
    }
  }
}

export default CampaignAiTechnologyManagerPathJunctions;
