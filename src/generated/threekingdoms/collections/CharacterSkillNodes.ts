
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkillNodeSets } from "./CharacterSkillNodeSets";
import { CharacterSkills } from "./CharacterSkills";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { GameModes } from "./GameModes";

export namespace CharacterSkillNodes {
  export const KEY = new CollectionKey("character_skill_nodes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _characterSkillNodeSetKey: string;
    readonly _characterSkillKey: string;
    readonly _factionKey: string;
    readonly _campaignKey: string;
    readonly tier: number;
    readonly indent: number;
    readonly _subculture: string;
    readonly pointsOnCreation: number;
    readonly requiredNumParents: number;
    readonly visibleInUi: boolean;
    readonly _gameMode: string;
    readonly canMeetParentRequirmentWithChildren: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._characterSkillNodeSetKey = values["character_skill_node_set_key"];
      this._characterSkillKey = values["character_skill_key"];
      this._factionKey = values["faction_key"];
      this._campaignKey = values["campaign_key"];
      this.tier = values["tier"];
      this.indent = values["indent"];
      this._subculture = values["subculture"];
      this.pointsOnCreation = values["points_on_creation"];
      this.requiredNumParents = values["required_num_parents"];
      this.visibleInUi = !!values["visible_in_ui"];
      this._gameMode = values["game_mode"];
      this.canMeetParentRequirmentWithChildren = !!values["can_meet_parent_requirment_with_children"];
    }
    
    get characterSkillNodeSetKey(): CharacterSkillNodeSets.Entry | undefined {
      const collection = <CharacterSkillNodeSets.Entry[]>this.collectionCache.getCollection(CharacterSkillNodeSets.KEY, CharacterSkillNodeSets.Entry);
      return collection.find(entry => entry.key === this._characterSkillNodeSetKey);
    }
    
    get characterSkillKey(): CharacterSkills.Entry | undefined {
      const collection = <CharacterSkills.Entry[]>this.collectionCache.getCollection(CharacterSkills.KEY, CharacterSkills.Entry);
      return collection.find(entry => entry.key === this._characterSkillKey);
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
    
    get campaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaignKey);
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
    
    get gameMode(): GameModes.Entry | undefined {
      const collection = <GameModes.Entry[]>this.collectionCache.getCollection(GameModes.KEY, GameModes.Entry);
      return collection.find(entry => entry.key === this._gameMode);
    }
  }
}

export default CharacterSkillNodes;
