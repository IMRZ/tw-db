
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosFactions } from "./StartPosFactions";
import { Names } from "./Names";
import { Agents } from "./Agents";
import { MinisterialPositions } from "./MinisterialPositions";
import { CampaignCharacterArtSets } from "./CampaignCharacterArtSets";
import { MainUnits } from "./MainUnits";
import { PoliticalParties } from "./PoliticalParties";
import { DeathTypes } from "./DeathTypes";

export namespace StartPosCharacters {
  export const KEY = new CollectionKey("start_pos_characters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _faction: number;
    readonly _name: number;
    readonly _surname: number;
    readonly age: number;
    readonly _type: string;
    readonly startx: number;
    readonly starty: number;
    readonly _ministerialPosition: string;
    readonly _portraitId: string;
    readonly model: string;
    readonly immortal: boolean;
    readonly _overrideGeneralUnit: string;
    readonly isInGeneralsPool: boolean;
    readonly isMale: boolean;
    readonly loyalty: number;
    readonly _clanName: number;
    readonly _otherName: number;
    readonly ambition: number;
    readonly _politicalParty: string;
    readonly _deathType: string;
    readonly turnsDiedBeforeStart: string;
    readonly legacyOverride: string;
    readonly progenitor: boolean;
    readonly xp: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["ID"];
      this._faction = values["faction"];
      this._name = values["Name"];
      this._surname = values["Surname"];
      this.age = values["Age"];
      this._type = values["Type"];
      this.startx = values["startx"];
      this.starty = values["starty"];
      this._ministerialPosition = values["ministerial_position"];
      this._portraitId = values["portrait_id"];
      this.model = values["model"];
      this.immortal = !!values["immortal"];
      this._overrideGeneralUnit = values["override_general_unit"];
      this.isInGeneralsPool = !!values["is_in_generals_pool"];
      this.isMale = !!values["is_male"];
      this.loyalty = values["loyalty"];
      this._clanName = values["clan_name"];
      this._otherName = values["other_name"];
      this.ambition = values["ambition"];
      this._politicalParty = values["political_party"];
      this._deathType = values["death_type"];
      this.turnsDiedBeforeStart = values["turns_died_before_start"];
      this.legacyOverride = values["legacy_override"];
      this.progenitor = !!values["progenitor"];
      this.xp = values["xp"];
    }
    
    get faction(): StartPosFactions.Entry | undefined {
      const collection = <StartPosFactions.Entry[]>this.collectionCache.getCollection(StartPosFactions.KEY, StartPosFactions.Entry);
      return collection.find(entry => entry.id === this._faction);
    }
    
    get name(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._name);
    }
    
    get surname(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._surname);
    }
    
    get type(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._type);
    }
    
    get ministerialPosition(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._ministerialPosition);
    }
    
    get portraitId(): CampaignCharacterArtSets.Entry | undefined {
      const collection = <CampaignCharacterArtSets.Entry[]>this.collectionCache.getCollection(CampaignCharacterArtSets.KEY, CampaignCharacterArtSets.Entry);
      return collection.find(entry => entry.artSetId === this._portraitId);
    }
    
    get overrideGeneralUnit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._overrideGeneralUnit);
    }
    
    get clanName(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._clanName);
    }
    
    get otherName(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._otherName);
    }
    
    get politicalParty(): PoliticalParties.Entry | undefined {
      const collection = <PoliticalParties.Entry[]>this.collectionCache.getCollection(PoliticalParties.KEY, PoliticalParties.Entry);
      return collection.find(entry => entry.key === this._politicalParty);
    }
    
    get deathType(): DeathTypes.Entry | undefined {
      const collection = <DeathTypes.Entry[]>this.collectionCache.getCollection(DeathTypes.KEY, DeathTypes.Entry);
      return collection.find(entry => entry.key === this._deathType);
    }
  }
}

export default StartPosCharacters;
