
import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
import { Factions } from "./Factions";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Cultures } from "./Cultures";
import { CeoEquipmentManagers } from "./CeoEquipmentManagers";
import { Agents } from "./Agents";
import { AgentSubtypes } from "./AgentSubtypes";
import { CharacterGenerationTemplates } from "./CharacterGenerationTemplates";

export namespace CeoEquipmentManagerCampaignLookups {
  export const KEY = new CollectionKey("ceo_equipment_manager_campaign_lookups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaign: string;
    readonly _faction: string;
    readonly _subculture: string;
    readonly _culture: string;
    readonly _equipmentManager: string;
    readonly autoId: number;
    readonly _agent: string;
    readonly _agentSubtype: string;
    readonly _characterGenerationTemplate: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaign = values["campaign"];
      this._faction = values["faction"];
      this._subculture = values["subculture"];
      this._culture = values["culture"];
      this._equipmentManager = values["equipment_manager"];
      this.autoId = values["auto_id"];
      this._agent = values["agent"];
      this._agentSubtype = values["agent_subtype"];
      this._characterGenerationTemplate = values["character_generation_template"];
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get equipmentManager(): CeoEquipmentManagers.Entry | undefined {
      const collection = <CeoEquipmentManagers.Entry[]>this.collectionCache.getCollection(CeoEquipmentManagers.KEY, CeoEquipmentManagers.Entry);
      return collection.find(entry => entry.key === this._equipmentManager);
    }
    
    get agent(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agent);
    }
    
    get agentSubtype(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._agentSubtype);
    }
    
    get characterGenerationTemplate(): CharacterGenerationTemplates.Entry | undefined {
      const collection = <CharacterGenerationTemplates.Entry[]>this.collectionCache.getCollection(CharacterGenerationTemplates.KEY, CharacterGenerationTemplates.Entry);
      return collection.find(entry => entry.key === this._characterGenerationTemplate);
    }
  }
}

export default CeoEquipmentManagerCampaignLookups;
