
import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { Factions } from "./Factions";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { AgentSubtypes } from "./AgentSubtypes";

export namespace CampaignCharacterArtSets {
  export const KEY = new CollectionKey("campaign_character_art_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly artSetId: string;
    readonly isCustom: boolean;
    readonly _agentType: string;
    readonly _faction: string;
    readonly _culture: string;
    readonly _subculture: string;
    readonly isMale: boolean;
    readonly _agentSubtype: string;
    readonly campaignMapScale: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.artSetId = values["art_set_id"];
      this.isCustom = !!values["is_custom"];
      this._agentType = values["agent_type"];
      this._faction = values["faction"];
      this._culture = values["culture"];
      this._subculture = values["subculture"];
      this.isMale = !!values["is_male"];
      this._agentSubtype = values["agent_subtype"];
      this.campaignMapScale = values["campaign_map_scale"];
    }
    
    get agentType(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agentType);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
    
    get agentSubtype(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._agentSubtype);
    }
  }
}

export default CampaignCharacterArtSets;
