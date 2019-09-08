
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { StartPosCalendars } from "./StartPosCalendars";
import { GovernmentTypes } from "./GovernmentTypes";
import { Religions } from "./Religions";
import { CampaignAiManagers } from "./CampaignAiManagers";
import { CampaignAiPersonalities } from "./CampaignAiPersonalities";
import { CampaignAiCharacterSkillTreeManagers } from "./CampaignAiCharacterSkillTreeManagers";
import { CaiAgentDistributionProfiles } from "./CaiAgentDistributionProfiles";
import { CaiAgentRecruitmentProfiles } from "./CaiAgentRecruitmentProfiles";
import { CdirMilitaryGeneratorConfigs } from "./CdirMilitaryGeneratorConfigs";

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
    readonly _aiPersonality: string;
    readonly longVictoryRegionCount: number;
    readonly shortVictoryRegionCount: number;
    readonly prestigeVictoryRegionCount: number;
    readonly worldDominationVictoryRegionCount: number;
    readonly shortVictoryYearEnd: number;
    readonly longVictoryYearEnd: number;
    readonly prestigeVictoryYearEnd: number;
    readonly worldDominationVictoryYearEnd: number;
    readonly prestigeArmy: number;
    readonly prestigeNavy: number;
    readonly prestigeEconomy: number;
    readonly prestigeEnlightenment: number;
    readonly shortVictoryWeekInYearEnd: number;
    readonly longVictoryWeekInYearEnd: number;
    readonly prestigeVictoryWeekInYearEnd: number;
    readonly worldDominationVictoryWeekInYearEnd: number;
    readonly honour: number;
    readonly _aiTechnologyManager: any;
    readonly _aiCharacterSkillTreeManager: string;
    readonly _caiAgentDistributionProfile: string;
    readonly _caiAgentRecruitmentProfile: string;
    readonly _caiStartingPersonality: any;
    readonly mpOneVsOneRegionCount: number;
    readonly mp2PCoOpRegionCount: number;
    readonly mp2PCoOpRegionCountLong: number;
    readonly longDescription: string;
    readonly canEverConvertReligion: boolean;
    readonly _cdirMilitaryGeneratorConfig: string;

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
      this._aiPersonality = values["ai_personality"];
      this.longVictoryRegionCount = values["long_victory_region_count"];
      this.shortVictoryRegionCount = values["short_victory_region_count"];
      this.prestigeVictoryRegionCount = values["prestige_victory_region_count"];
      this.worldDominationVictoryRegionCount = values["world_domination_victory_region_count"];
      this.shortVictoryYearEnd = values["short_victory_year_end"];
      this.longVictoryYearEnd = values["long_victory_year_end"];
      this.prestigeVictoryYearEnd = values["prestige_victory_year_end"];
      this.worldDominationVictoryYearEnd = values["world_domination_victory_year_end"];
      this.prestigeArmy = values["prestige_army"];
      this.prestigeNavy = values["prestige_navy"];
      this.prestigeEconomy = values["prestige_economy"];
      this.prestigeEnlightenment = values["prestige_enlightenment"];
      this.shortVictoryWeekInYearEnd = values["short_victory_week_in_year_end"];
      this.longVictoryWeekInYearEnd = values["long_victory_week_in_year_end"];
      this.prestigeVictoryWeekInYearEnd = values["prestige_victory_week_in_year_end"];
      this.worldDominationVictoryWeekInYearEnd = values["world_domination_victory_week_in_year_end"];
      this.honour = values["honour"];
      this._aiTechnologyManager = values["ai_technology_manager"];
      this._aiCharacterSkillTreeManager = values["ai_character_skill_tree_manager"];
      this._caiAgentDistributionProfile = values["cai_agent_distribution_profile"];
      this._caiAgentRecruitmentProfile = values["cai_agent_recruitment_profile"];
      this._caiStartingPersonality = values["cai_starting_personality"];
      this.mpOneVsOneRegionCount = values["mp_one_vs_one_region_count"];
      this.mp2PCoOpRegionCount = values["mp_2p_co_op_region_count"];
      this.mp2PCoOpRegionCountLong = values["mp_2p_co_op_region_count_long"];
      this.longDescription = values["long_description"];
      this.canEverConvertReligion = !!values["can_ever_convert_religion"];
      this._cdirMilitaryGeneratorConfig = values["cdir_military_generator_config"];
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
    
    get aiPersonality(): CampaignAiPersonalities.Entry | undefined {
      const collection = <CampaignAiPersonalities.Entry[]>this.collectionCache.getCollection(CampaignAiPersonalities.KEY, CampaignAiPersonalities.Entry);
      return collection.find(entry => entry.personality === this._aiPersonality);
    }
    
    get aiCharacterSkillTreeManager(): CampaignAiCharacterSkillTreeManagers.Entry | undefined {
      const collection = <CampaignAiCharacterSkillTreeManagers.Entry[]>this.collectionCache.getCollection(CampaignAiCharacterSkillTreeManagers.KEY, CampaignAiCharacterSkillTreeManagers.Entry);
      return collection.find(entry => entry.key === this._aiCharacterSkillTreeManager);
    }
    
    get caiAgentDistributionProfile(): CaiAgentDistributionProfiles.Entry | undefined {
      const collection = <CaiAgentDistributionProfiles.Entry[]>this.collectionCache.getCollection(CaiAgentDistributionProfiles.KEY, CaiAgentDistributionProfiles.Entry);
      return collection.find(entry => entry.key === this._caiAgentDistributionProfile);
    }
    
    get caiAgentRecruitmentProfile(): CaiAgentRecruitmentProfiles.Entry | undefined {
      const collection = <CaiAgentRecruitmentProfiles.Entry[]>this.collectionCache.getCollection(CaiAgentRecruitmentProfiles.KEY, CaiAgentRecruitmentProfiles.Entry);
      return collection.find(entry => entry.key === this._caiAgentRecruitmentProfile);
    }
    
    get cdirMilitaryGeneratorConfig(): CdirMilitaryGeneratorConfigs.Entry | undefined {
      const collection = <CdirMilitaryGeneratorConfigs.Entry[]>this.collectionCache.getCollection(CdirMilitaryGeneratorConfigs.KEY, CdirMilitaryGeneratorConfigs.Entry);
      return collection.find(entry => entry.key === this._cdirMilitaryGeneratorConfig);
    }
  }
}

export default StartPosFactions;
