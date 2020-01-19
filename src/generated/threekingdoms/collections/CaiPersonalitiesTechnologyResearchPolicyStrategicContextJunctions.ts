
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAiTechnologyManagers } from "./CampaignAiTechnologyManagers";
import { CaiStrategicContextTypes } from "./CaiStrategicContextTypes";
import { CaiFactionStatuses } from "./CaiFactionStatuses";
import { CaiPersonalitiesTechnologyResearches } from "./CaiPersonalitiesTechnologyResearches";

export namespace CaiPersonalitiesTechnologyResearchPolicyStrategicContextJunctions {
  export const KEY = new CollectionKey("cai_personalities_technology_research_policy_strategic_context_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly _strategicContextKey: string;
    readonly _factionStatusKey: string;
    readonly _technologyResearchPolicyKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this._strategicContextKey = values["strategic_context_key"];
      this._factionStatusKey = values["faction_status_key"];
      this._technologyResearchPolicyKey = values["technology_research_policy_key"];
    }
    
    get key(): CampaignAiTechnologyManagers.Entry | undefined {
      const collection = <CampaignAiTechnologyManagers.Entry[]>this.collectionCache.getCollection(CampaignAiTechnologyManagers.KEY, CampaignAiTechnologyManagers.Entry);
      return collection.find(entry => entry.key === this._key);
    }
    
    get strategicContextKey(): CaiStrategicContextTypes.Entry | undefined {
      const collection = <CaiStrategicContextTypes.Entry[]>this.collectionCache.getCollection(CaiStrategicContextTypes.KEY, CaiStrategicContextTypes.Entry);
      return collection.find(entry => entry.key === this._strategicContextKey);
    }
    
    get factionStatusKey(): CaiFactionStatuses.Entry | undefined {
      const collection = <CaiFactionStatuses.Entry[]>this.collectionCache.getCollection(CaiFactionStatuses.KEY, CaiFactionStatuses.Entry);
      return collection.find(entry => entry.factionStatus === this._factionStatusKey);
    }
    
    get technologyResearchPolicyKey(): CaiPersonalitiesTechnologyResearches.Entry | undefined {
      const collection = <CaiPersonalitiesTechnologyResearches.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesTechnologyResearches.KEY, CaiPersonalitiesTechnologyResearches.Entry);
      return collection.find(entry => entry.key === this._technologyResearchPolicyKey);
    }
  }
}

export default CaiPersonalitiesTechnologyResearchPolicyStrategicContextJunctions;
