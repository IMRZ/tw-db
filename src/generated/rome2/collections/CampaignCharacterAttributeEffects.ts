
import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { AgentAttributes } from "./AgentAttributes";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";

export namespace CampaignCharacterAttributeEffects {
  export const KEY = new CollectionKey("campaign_character_attribute_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _agentRecord: string;
    readonly _attributeRecord: string;
    readonly attributeLevel: number;
    readonly _effectRecord: string;
    readonly _effectScope: string;
    readonly effectValue: number;
    readonly _cultureRecord: string;
    readonly _subcultureRecord: string;
    readonly _factionRecord: string;
    readonly _campaignRecord: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._agentRecord = values["agent_record"];
      this._attributeRecord = values["attribute_record"];
      this.attributeLevel = values["attribute_level"];
      this._effectRecord = values["effect_record"];
      this._effectScope = values["effect_scope"];
      this.effectValue = values["effect_value"];
      this._cultureRecord = values["culture_record"];
      this._subcultureRecord = values["subculture_record"];
      this._factionRecord = values["faction_record"];
      this._campaignRecord = values["campaign_record"];
    }
    
    get agentRecord(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agentRecord);
    }
    
    get attributeRecord(): AgentAttributes.Entry | undefined {
      const collection = <AgentAttributes.Entry[]>this.collectionCache.getCollection(AgentAttributes.KEY, AgentAttributes.Entry);
      return collection.find(entry => entry.key === this._attributeRecord);
    }
    
    get effectRecord(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effectRecord);
    }
    
    get effectScope(): CampaignEffectScopes.Entry | undefined {
      const collection = <CampaignEffectScopes.Entry[]>this.collectionCache.getCollection(CampaignEffectScopes.KEY, CampaignEffectScopes.Entry);
      return collection.find(entry => entry.key === this._effectScope);
    }
    
    get cultureRecord(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._cultureRecord);
    }
    
    get subcultureRecord(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subcultureRecord);
    }
    
    get factionRecord(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionRecord);
    }
    
    get campaignRecord(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaignRecord);
    }
  }
}

export default CampaignCharacterAttributeEffects;
