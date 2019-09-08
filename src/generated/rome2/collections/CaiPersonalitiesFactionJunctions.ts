
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
import { CaiPersonalities } from "./CaiPersonalities";
import { CaiPersonalitiesRandomGroups } from "./CaiPersonalitiesRandomGroups";
import { CaiPersonalitiesRandomisationPolicies } from "./CaiPersonalitiesRandomisationPolicies";

export namespace CaiPersonalitiesFactionJunctions {
  export const KEY = new CollectionKey("cai_personalities_faction_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _factionKey: string;
    readonly _campaignKey: string;
    readonly _defaultPersonality: string;
    readonly _personalityGroup: string;
    readonly _randomisationPolicyKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._factionKey = values["faction_key"];
      this._campaignKey = values["campaign_key"];
      this._defaultPersonality = values["default_personality"];
      this._personalityGroup = values["personality_group"];
      this._randomisationPolicyKey = values["randomisation_policy_key"];
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
    
    get campaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaignKey);
    }
    
    get defaultPersonality(): CaiPersonalities.Entry | undefined {
      const collection = <CaiPersonalities.Entry[]>this.collectionCache.getCollection(CaiPersonalities.KEY, CaiPersonalities.Entry);
      return collection.find(entry => entry.key === this._defaultPersonality);
    }
    
    get personalityGroup(): CaiPersonalitiesRandomGroups.Entry | undefined {
      const collection = <CaiPersonalitiesRandomGroups.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesRandomGroups.KEY, CaiPersonalitiesRandomGroups.Entry);
      return collection.find(entry => entry.randomPersonalityGroupKey === this._personalityGroup);
    }
    
    get randomisationPolicyKey(): CaiPersonalitiesRandomisationPolicies.Entry | undefined {
      const collection = <CaiPersonalitiesRandomisationPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesRandomisationPolicies.KEY, CaiPersonalitiesRandomisationPolicies.Entry);
      return collection.find(entry => entry.randomisationPolicyKey === this._randomisationPolicyKey);
    }
  }
}

export default CaiPersonalitiesFactionJunctions;
