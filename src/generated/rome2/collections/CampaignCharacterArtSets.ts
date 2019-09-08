
import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { Factions } from "./Factions";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { CampaignCharacterArtSetsCampaignGroups } from "./CampaignCharacterArtSetsCampaignGroups";

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
    readonly _group: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.artSetId = values["art_set_id"];
      this.isCustom = !!values["is_custom"];
      this._agentType = values["agent_type"];
      this._faction = values["faction"];
      this._culture = values["culture"];
      this._subculture = values["subculture"];
      this.isMale = !!values["is_male"];
      this._group = values["group"];
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
    
    get group(): CampaignCharacterArtSetsCampaignGroups.Entry | undefined {
      const collection = <CampaignCharacterArtSetsCampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignCharacterArtSetsCampaignGroups.KEY, CampaignCharacterArtSetsCampaignGroups.Entry);
      return collection.find(entry => entry.key === this._group);
    }
  }
}

export default CampaignCharacterArtSets;
