
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
import { Agents } from "./Agents";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { AgentSubtypes } from "./AgentSubtypes";
import { GameModes } from "./GameModes";

export namespace CharacterSkillNodeSets {
  export const KEY = new CollectionKey("character_skill_node_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _factionKey: string;
    readonly _campaignKey: string;
    readonly _agentKey: string;
    readonly encTitle: string;
    readonly _subculture: string;
    readonly forArmy: boolean;
    readonly forNavy: boolean;
    readonly _agentSubtypeKey: string;
    readonly _gameMode: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._factionKey = values["faction_key"];
      this._campaignKey = values["campaign_key"];
      this._agentKey = values["agent_key"];
      this.encTitle = values["enc_title"];
      this._subculture = values["subculture"];
      this.forArmy = !!values["for_army"];
      this.forNavy = !!values["for_navy"];
      this._agentSubtypeKey = values["agent_subtype_key"];
      this._gameMode = values["game_mode"];
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
    
    get campaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaignKey);
    }
    
    get agentKey(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agentKey);
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
    
    get agentSubtypeKey(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._agentSubtypeKey);
    }
    
    get gameMode(): GameModes.Entry | undefined {
      const collection = <GameModes.Entry[]>this.collectionCache.getCollection(GameModes.KEY, GameModes.Entry);
      return collection.find(entry => entry.key === this._gameMode);
    }
  }
}

export default CharacterSkillNodeSets;
