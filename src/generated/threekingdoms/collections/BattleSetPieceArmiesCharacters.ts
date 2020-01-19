
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { Names } from "./Names";
import { SpecialAbilityGroups } from "./SpecialAbilityGroups";
import { Agents } from "./Agents";
import { AgentSubtypes } from "./AgentSubtypes";
import { CampaignCharacterArts } from "./CampaignCharacterArts";
import { BattleSetPieceArmiesCharactersSkillsets } from "./BattleSetPieceArmiesCharactersSkillsets";

export namespace BattleSetPieceArmiesCharacters {
  export const KEY = new CollectionKey("battle_set_piece_armies_characters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly characterName: string;
    readonly _unitType: string;
    readonly _forename: number;
    readonly _surname: number;
    readonly _magicLore: string;
    readonly numMen: number;
    readonly characterLevel: number;
    readonly _agentType: string;
    readonly _agentSubtype: string;
    readonly portrait: string;
    readonly _characterModel: number;
    readonly _skillset: string;
    readonly male: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.characterName = values["character_name"];
      this._unitType = values["unit_type"];
      this._forename = values["forename"];
      this._surname = values["surname"];
      this._magicLore = values["magic_lore"];
      this.numMen = values["num_men"];
      this.characterLevel = values["character_level"];
      this._agentType = values["agent_type"];
      this._agentSubtype = values["agent_subtype"];
      this.portrait = values["portrait"];
      this._characterModel = values["character_model"];
      this._skillset = values["skillset"];
      this.male = !!values["male"];
    }
    
    get unitType(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unitType);
    }
    
    get forename(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._forename);
    }
    
    get surname(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._surname);
    }
    
    get magicLore(): SpecialAbilityGroups.Entry | undefined {
      const collection = <SpecialAbilityGroups.Entry[]>this.collectionCache.getCollection(SpecialAbilityGroups.KEY, SpecialAbilityGroups.Entry);
      return collection.find(entry => entry.abilityGroup === this._magicLore);
    }
    
    get agentType(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agentType);
    }
    
    get agentSubtype(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._agentSubtype);
    }
    
    get characterModel(): CampaignCharacterArts.Entry | undefined {
      const collection = <CampaignCharacterArts.Entry[]>this.collectionCache.getCollection(CampaignCharacterArts.KEY, CampaignCharacterArts.Entry);
      return collection.find(entry => entry.id === this._characterModel);
    }
    
    get skillset(): BattleSetPieceArmiesCharactersSkillsets.Entry | undefined {
      const collection = <BattleSetPieceArmiesCharactersSkillsets.Entry[]>this.collectionCache.getCollection(BattleSetPieceArmiesCharactersSkillsets.KEY, BattleSetPieceArmiesCharactersSkillsets.Entry);
      return collection.find(entry => entry.key === this._skillset);
    }
  }
}

export default BattleSetPieceArmiesCharacters;
