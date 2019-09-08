
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { AgentSubtypes } from "./AgentSubtypes";
import { Names } from "./Names";
import { CampaignCharacterArtSets } from "./CampaignCharacterArtSets";

export namespace CampaignRogueArmyLeaders {
  export const KEY = new CollectionKey("campaign_rogue_army_leaders");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _faction: string;
    readonly _agentSubtype: string;
    readonly isMale: boolean;
    readonly _name: number;
    readonly _surname: number;
    readonly _clanName: number;
    readonly _otherName: number;
    readonly _artset: string;
    readonly canNaturallySpawn: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._faction = values["faction"];
      this._agentSubtype = values["agent_subtype"];
      this.isMale = !!values["is_male"];
      this._name = values["name"];
      this._surname = values["surname"];
      this._clanName = values["clan_name"];
      this._otherName = values["other_name"];
      this._artset = values["artset"];
      this.canNaturallySpawn = !!values["can_naturally_spawn"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get agentSubtype(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._agentSubtype);
    }
    
    get name(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._name);
    }
    
    get surname(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._surname);
    }
    
    get clanName(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._clanName);
    }
    
    get otherName(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._otherName);
    }
    
    get artset(): CampaignCharacterArtSets.Entry | undefined {
      const collection = <CampaignCharacterArtSets.Entry[]>this.collectionCache.getCollection(CampaignCharacterArtSets.KEY, CampaignCharacterArtSets.Entry);
      return collection.find(entry => entry.artSetId === this._artset);
    }
  }
}

export default CampaignRogueArmyLeaders;
