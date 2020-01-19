
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { StartPosCalendars } from "./StartPosCalendars";
import { GovernmentTypes } from "./GovernmentTypes";
import { Religions } from "./Religions";
import { CampaignAiManagers } from "./CampaignAiManagers";
import { CaiPersonalities } from "./CaiPersonalities";
import { CdirMilitaryGeneratorConfigs } from "./CdirMilitaryGeneratorConfigs";
import { CaiPersonalityGroups } from "./CaiPersonalityGroups";
import { CeoInitialDatas } from "./CeoInitialDatas";
import { CampaignFactionPotentialTypes } from "./CampaignFactionPotentialTypes";

export namespace StartPosFactions {
  export const KEY = new CollectionKey("start_pos_factions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _faction: string;
    readonly _campaign: string;
    readonly playable: boolean;
    readonly treasury: number;
    readonly startingOrder: number;
    readonly _governmentType: string;
    readonly _stateReligion: string;
    readonly isMajor: boolean;
    readonly description: string;
    readonly difficulty: string;
    readonly _aiManager: string;
    readonly prestigeArmy: number;
    readonly prestigeNavy: number;
    readonly prestigeEconomy: number;
    readonly prestigeEnlightenment: number;
    readonly honour: number;
    readonly _caiStartingPersonality: string;
    readonly longDescription: string;
    readonly canEverConvertReligion: boolean;
    readonly _cdirMilitaryGeneratorConfig: string;
    readonly unique: boolean;
    readonly _caiPersonalityGroup: string;
    readonly _ceoInitialData: string;
    readonly _factionPotential: string;
    readonly startingTechCooldownTurns: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["ID"];
      this._faction = values["faction"];
      this._campaign = values["campaign"];
      this.playable = !!values["playable"];
      this.treasury = values["treasury"];
      this.startingOrder = values["starting_order"];
      this._governmentType = values["government_type"];
      this._stateReligion = values["state_religion"];
      this.isMajor = !!values["is_major"];
      this.description = values["description"];
      this.difficulty = values["difficulty"];
      this._aiManager = values["ai_manager"];
      this.prestigeArmy = values["prestige_army"];
      this.prestigeNavy = values["prestige_navy"];
      this.prestigeEconomy = values["prestige_economy"];
      this.prestigeEnlightenment = values["prestige_enlightenment"];
      this.honour = values["honour"];
      this._caiStartingPersonality = values["cai_starting_personality"];
      this.longDescription = values["long_description"];
      this.canEverConvertReligion = !!values["can_ever_convert_religion"];
      this._cdirMilitaryGeneratorConfig = values["cdir_military_generator_config"];
      this.unique = !!values["unique"];
      this._caiPersonalityGroup = values["cai_personality_group"];
      this._ceoInitialData = values["ceo_initial_data"];
      this._factionPotential = values["faction_potential"];
      this.startingTechCooldownTurns = values["starting_tech_cooldown_turns"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get campaign(): StartPosCalendars.Entry | undefined {
      const collection = <StartPosCalendars.Entry[]>this.collectionCache.getCollection(StartPosCalendars.KEY, StartPosCalendars.Entry);
      return collection.find(entry => entry._campaign === this._campaign);
    }
    
    get governmentType(): GovernmentTypes.Entry | undefined {
      const collection = <GovernmentTypes.Entry[]>this.collectionCache.getCollection(GovernmentTypes.KEY, GovernmentTypes.Entry);
      return collection.find(entry => entry.governmentType === this._governmentType);
    }
    
    get stateReligion(): Religions.Entry | undefined {
      const collection = <Religions.Entry[]>this.collectionCache.getCollection(Religions.KEY, Religions.Entry);
      return collection.find(entry => entry.religionKey === this._stateReligion);
    }
    
    get aiManager(): CampaignAiManagers.Entry | undefined {
      const collection = <CampaignAiManagers.Entry[]>this.collectionCache.getCollection(CampaignAiManagers.KEY, CampaignAiManagers.Entry);
      return collection.find(entry => entry.manager === this._aiManager);
    }
    
    get caiStartingPersonality(): CaiPersonalities.Entry | undefined {
      const collection = <CaiPersonalities.Entry[]>this.collectionCache.getCollection(CaiPersonalities.KEY, CaiPersonalities.Entry);
      return collection.find(entry => entry.key === this._caiStartingPersonality);
    }
    
    get cdirMilitaryGeneratorConfig(): CdirMilitaryGeneratorConfigs.Entry | undefined {
      const collection = <CdirMilitaryGeneratorConfigs.Entry[]>this.collectionCache.getCollection(CdirMilitaryGeneratorConfigs.KEY, CdirMilitaryGeneratorConfigs.Entry);
      return collection.find(entry => entry.key === this._cdirMilitaryGeneratorConfig);
    }
    
    get caiPersonalityGroup(): CaiPersonalityGroups.Entry | undefined {
      const collection = <CaiPersonalityGroups.Entry[]>this.collectionCache.getCollection(CaiPersonalityGroups.KEY, CaiPersonalityGroups.Entry);
      return collection.find(entry => entry.key === this._caiPersonalityGroup);
    }
    
    get ceoInitialData(): CeoInitialDatas.Entry | undefined {
      const collection = <CeoInitialDatas.Entry[]>this.collectionCache.getCollection(CeoInitialDatas.KEY, CeoInitialDatas.Entry);
      return collection.find(entry => entry.key === this._ceoInitialData);
    }
    
    get factionPotential(): CampaignFactionPotentialTypes.Entry | undefined {
      const collection = <CampaignFactionPotentialTypes.Entry[]>this.collectionCache.getCollection(CampaignFactionPotentialTypes.KEY, CampaignFactionPotentialTypes.Entry);
      return collection.find(entry => entry.factionPotentialType === this._factionPotential);
    }
  }
}

export default StartPosFactions;
