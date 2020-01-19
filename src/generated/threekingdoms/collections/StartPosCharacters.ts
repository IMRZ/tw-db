
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosFactions } from "./StartPosFactions";
import { Agents } from "./Agents";
import { MinisterialPositions } from "./MinisterialPositions";
import { DeathTypes } from "./DeathTypes";
import { AgentSubtypes } from "./AgentSubtypes";
import { CharacterGenerationTemplates } from "./CharacterGenerationTemplates";

export namespace StartPosCharacters {
  export const KEY = new CollectionKey("start_pos_characters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _faction: number;
    readonly _type: string;
    readonly startOnMap: boolean;
    readonly startx: number;
    readonly starty: number;
    readonly _ministerialPosition: string;
    readonly immortal: boolean;
    readonly isInGeneralsPool: boolean;
    readonly loyalty: number;
    readonly ambition: number;
    readonly _deathType: string;
    readonly turnsDiedBeforeStart: string;
    readonly legacyOverride: string;
    readonly progenitor: boolean;
    readonly _subtype: string;
    readonly _template: string;
    readonly undercoverCharacterEnabler: boolean;
    readonly startFacingAngle: number;
    readonly startingForceRetreatedThisTurn: boolean;
    readonly rankOverride: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["ID"];
      this._faction = values["faction"];
      this._type = values["type"];
      this.startOnMap = !!values["start_on_map"];
      this.startx = values["startx"];
      this.starty = values["starty"];
      this._ministerialPosition = values["ministerial_position"];
      this.immortal = !!values["immortal"];
      this.isInGeneralsPool = !!values["is_in_generals_pool"];
      this.loyalty = values["loyalty"];
      this.ambition = values["ambition"];
      this._deathType = values["death_type"];
      this.turnsDiedBeforeStart = values["turns_died_before_start"];
      this.legacyOverride = values["legacy_override"];
      this.progenitor = !!values["progenitor"];
      this._subtype = values["subtype"];
      this._template = values["template"];
      this.undercoverCharacterEnabler = !!values["undercover_character_enabler"];
      this.startFacingAngle = values["start_facing_angle"];
      this.startingForceRetreatedThisTurn = !!values["starting_force_retreated_this_turn"];
      this.rankOverride = values["rank_override"];
    }
    
    get faction(): StartPosFactions.Entry | undefined {
      const collection = <StartPosFactions.Entry[]>this.collectionCache.getCollection(StartPosFactions.KEY, StartPosFactions.Entry);
      return collection.find(entry => entry.id === this._faction);
    }
    
    get type(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._type);
    }
    
    get ministerialPosition(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._ministerialPosition);
    }
    
    get deathType(): DeathTypes.Entry | undefined {
      const collection = <DeathTypes.Entry[]>this.collectionCache.getCollection(DeathTypes.KEY, DeathTypes.Entry);
      return collection.find(entry => entry.key === this._deathType);
    }
    
    get subtype(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._subtype);
    }
    
    get template(): CharacterGenerationTemplates.Entry | undefined {
      const collection = <CharacterGenerationTemplates.Entry[]>this.collectionCache.getCollection(CharacterGenerationTemplates.KEY, CharacterGenerationTemplates.Entry);
      return collection.find(entry => entry.key === this._template);
    }
  }
}

export default StartPosCharacters;
