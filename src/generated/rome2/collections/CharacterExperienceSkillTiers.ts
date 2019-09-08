
import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { Campaigns } from "./Campaigns";

export namespace CharacterExperienceSkillTiers {
  export const KEY = new CollectionKey("character_experience_skill_tiers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _agentKey: string;
    readonly skillRank: number;
    readonly experienceThreshold: number;
    readonly skillPoints: number;
    readonly _optionalCampaignKey: string;
    readonly forArmy: boolean;
    readonly forNavy: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._agentKey = values["agent_key"];
      this.skillRank = values["skill_rank"];
      this.experienceThreshold = values["experience_threshold"];
      this.skillPoints = values["skill_points"];
      this._optionalCampaignKey = values["optional_campaign_key"];
      this.forArmy = !!values["for_army"];
      this.forNavy = !!values["for_navy"];
    }
    
    get agentKey(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agentKey);
    }
    
    get optionalCampaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._optionalCampaignKey);
    }
  }
}

export default CharacterExperienceSkillTiers;
