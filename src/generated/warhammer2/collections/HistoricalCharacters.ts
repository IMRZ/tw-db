
import { CollectionCache, CollectionKey } from "../../../common";
import { Genders } from "./Genders";
import { Agents } from "./Agents";
import { Factions } from "./Factions";
import { Names } from "./Names";
import { CampaignCharacterArtSets } from "./CampaignCharacterArtSets";

export namespace HistoricalCharacters {
  export const KEY = new CollectionKey("historical_characters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _gender: string;
    readonly _agentType: string;
    readonly _faction: string;
    readonly spawningWindowStart: number;
    readonly spawningWindowEnd: number;
    readonly _nameKey: number;
    readonly _surnameKey: number;
    readonly _artSetId: string;
    readonly _clanNameKey: number;
    readonly _otherNameKey: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._gender = values["gender"];
      this._agentType = values["agent_type"];
      this._faction = values["faction"];
      this.spawningWindowStart = values["spawning_window_start"];
      this.spawningWindowEnd = values["spawning_window_end"];
      this._nameKey = values["name_key"];
      this._surnameKey = values["surname_key"];
      this._artSetId = values["art_set_id"];
      this._clanNameKey = values["clan_name_key"];
      this._otherNameKey = values["other_name_key"];
    }
    
    get gender(): Genders.Entry | undefined {
      const collection = <Genders.Entry[]>this.collectionCache.getCollection(Genders.KEY, Genders.Entry);
      return collection.find(entry => entry.gender === this._gender);
    }
    
    get agentType(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agentType);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get nameKey(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._nameKey);
    }
    
    get surnameKey(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._surnameKey);
    }
    
    get artSetId(): CampaignCharacterArtSets.Entry | undefined {
      const collection = <CampaignCharacterArtSets.Entry[]>this.collectionCache.getCollection(CampaignCharacterArtSets.KEY, CampaignCharacterArtSets.Entry);
      return collection.find(entry => entry.artSetId === this._artSetId);
    }
    
    get clanNameKey(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._clanNameKey);
    }
    
    get otherNameKey(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._otherNameKey);
    }
  }
}

export default HistoricalCharacters;
