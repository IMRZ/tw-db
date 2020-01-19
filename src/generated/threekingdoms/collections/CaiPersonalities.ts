
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesBudgetPolicies } from "./CaiPersonalitiesBudgetPolicies";
import { CampaignAiTechnologyManagers } from "./CampaignAiTechnologyManagers";
import { CaiAgentDistributionProfiles } from "./CaiAgentDistributionProfiles";
import { CaiAgentRecruitmentProfiles } from "./CaiAgentRecruitmentProfiles";
import { CaiPersonalitiesReliabilityPolicies } from "./CaiPersonalitiesReliabilityPolicies";
import { CaiPersonalitiesReligiousConversionPolicies } from "./CaiPersonalitiesReligiousConversionPolicies";
import { CaiMilitaryAggressivenessPolicies } from "./CaiMilitaryAggressivenessPolicies";
import { CaiMilitaryBehaviourPolicies } from "./CaiMilitaryBehaviourPolicies";
import { CaiPersonalityDiplomaticComponents } from "./CaiPersonalityDiplomaticComponents";
import { CaiPersonalityStrategicComponents } from "./CaiPersonalityStrategicComponents";
import { CaiPersonalityCulturalComponents } from "./CaiPersonalityCulturalComponents";
import { CaiPersonalityDealEvaluationComponents } from "./CaiPersonalityDealEvaluationComponents";
import { CaiPersonalityDealGenerationComponents } from "./CaiPersonalityDealGenerationComponents";
import { CaiPersonalitiesConstructionSystemPolicies } from "./CaiPersonalitiesConstructionSystemPolicies";
import { CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles } from "./CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles";
import { CaiPersonalityNegotiationComponents } from "./CaiPersonalityNegotiationComponents";
import { CaiPersonalitiesIncomeAllocationPolicies } from "./CaiPersonalitiesIncomeAllocationPolicies";
import { CaiPersonalityOccupationDecisionComponents } from "./CaiPersonalityOccupationDecisionComponents";
import { CaiPersonalityReligiousComponents } from "./CaiPersonalityReligiousComponents";
import { CaiPersonalityEmpireRivalryComponents } from "./CaiPersonalityEmpireRivalryComponents";
import { CaiPersonalitiesReligionChangeManagementPolicies } from "./CaiPersonalitiesReligionChangeManagementPolicies";
import { CaiPersonalityTrespassingComponents } from "./CaiPersonalityTrespassingComponents";
import { CaiAgentEmbedProfiles } from "./CaiAgentEmbedProfiles";
import { CaiPersonalitiesCharacterSkillSelectionPolicies } from "./CaiPersonalitiesCharacterSkillSelectionPolicies";
import { CaiPersonalityDiplomaticAttitudeComponents } from "./CaiPersonalityDiplomaticAttitudeComponents";
import { CaiPersonalityCharacterRoleComponents } from "./CaiPersonalityCharacterRoleComponents";
import { CdirMilitaryGeneratorConfigs } from "./CdirMilitaryGeneratorConfigs";
import { DiplomacyStrings } from "./DiplomacyStrings";
import { CaiPersonalityCaptiveComponents } from "./CaiPersonalityCaptiveComponents";
import { CaiPersonalitiesTaskManagementSystemVariableProfiles } from "./CaiPersonalitiesTaskManagementSystemVariableProfiles";
import { CaiPersonalitySurrenderComponents } from "./CaiPersonalitySurrenderComponents";
import { CaiPersonalityFinancialContextControls } from "./CaiPersonalityFinancialContextControls";

export namespace CaiPersonalities {
  export const KEY = new CollectionKey("cai_personalities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _budgetPolicyKey: string;
    readonly _technologyManagerKey: string;
    readonly _agentDistributionProfileKey: string;
    readonly _agentRecruitmentProfileKey: string;
    readonly _reliabilityPolicyKey: string;
    readonly _religiousConversionPolicy: string;
    readonly _militaryAggressivenessPolicy: string;
    readonly _militaryBehaviourPolicy: string;
    readonly allowedForRandomSelection: boolean;
    readonly _diplomaticComponent: string;
    readonly _strategicComponent: string;
    readonly _culturalComponent: string;
    readonly _dealEvaluationComponent: string;
    readonly _dealGenerationComponent: string;
    readonly _constructionSystemPolicy: string;
    readonly _taskManagementSystemTaskGenerationProfile: string;
    readonly _negotiationComponent: string;
    readonly _incomeAllocationPolicy: string;
    readonly _occupationDecisionComponent: string;
    readonly _religiousComponent: string;
    readonly _empireRivalryComponent: string;
    readonly _religionChanageManagementPolicy: string;
    readonly _trespassingComponent: string;
    readonly _agentEmbedProfile: string;
    readonly _characterSkillSelectionPolicy: string;
    readonly _diplomaticAttitudeComponent: string;
    readonly _characterRoleComponent: string;
    readonly _militaryGeneratorConfigOverride: string;
    readonly _displayName: string;
    readonly _captivesComponent: string;
    readonly _tmsVariablesProfile: string;
    readonly _surrenderComponent: string;
    readonly _financialContextControl: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._budgetPolicyKey = values["budget_policy_key"];
      this._technologyManagerKey = values["technology_manager_key"];
      this._agentDistributionProfileKey = values["agent_distribution_profile_key"];
      this._agentRecruitmentProfileKey = values["agent_recruitment_profile_key"];
      this._reliabilityPolicyKey = values["reliability_policy_key"];
      this._religiousConversionPolicy = values["religious_conversion_policy"];
      this._militaryAggressivenessPolicy = values["military_aggressiveness_policy"];
      this._militaryBehaviourPolicy = values["military_behaviour_policy"];
      this.allowedForRandomSelection = !!values["allowed_for_random_selection"];
      this._diplomaticComponent = values["diplomatic_component"];
      this._strategicComponent = values["strategic_component"];
      this._culturalComponent = values["cultural_component"];
      this._dealEvaluationComponent = values["deal_evaluation_component"];
      this._dealGenerationComponent = values["deal_generation_component"];
      this._constructionSystemPolicy = values["construction_system_policy"];
      this._taskManagementSystemTaskGenerationProfile = values["task_management_system_task_generation_profile"];
      this._negotiationComponent = values["negotiation_component"];
      this._incomeAllocationPolicy = values["income_allocation_policy"];
      this._occupationDecisionComponent = values["occupation_decision_component"];
      this._religiousComponent = values["religious_component"];
      this._empireRivalryComponent = values["empire_rivalry_component"];
      this._religionChanageManagementPolicy = values["religion_chanage_management_policy"];
      this._trespassingComponent = values["trespassing_component"];
      this._agentEmbedProfile = values["agent_embed_profile"];
      this._characterSkillSelectionPolicy = values["character_skill_selection_policy"];
      this._diplomaticAttitudeComponent = values["diplomatic_attitude_component"];
      this._characterRoleComponent = values["character_role_component"];
      this._militaryGeneratorConfigOverride = values["military_generator_config_override"];
      this._displayName = values["display_name"];
      this._captivesComponent = values["captives_component"];
      this._tmsVariablesProfile = values["tms_variables_profile"];
      this._surrenderComponent = values["surrender_component"];
      this._financialContextControl = values["financial_context_control"];
    }
    
    get budgetPolicyKey(): CaiPersonalitiesBudgetPolicies.Entry | undefined {
      const collection = <CaiPersonalitiesBudgetPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesBudgetPolicies.KEY, CaiPersonalitiesBudgetPolicies.Entry);
      return collection.find(entry => entry.key === this._budgetPolicyKey);
    }
    
    get technologyManagerKey(): CampaignAiTechnologyManagers.Entry | undefined {
      const collection = <CampaignAiTechnologyManagers.Entry[]>this.collectionCache.getCollection(CampaignAiTechnologyManagers.KEY, CampaignAiTechnologyManagers.Entry);
      return collection.find(entry => entry.key === this._technologyManagerKey);
    }
    
    get agentDistributionProfileKey(): CaiAgentDistributionProfiles.Entry | undefined {
      const collection = <CaiAgentDistributionProfiles.Entry[]>this.collectionCache.getCollection(CaiAgentDistributionProfiles.KEY, CaiAgentDistributionProfiles.Entry);
      return collection.find(entry => entry.key === this._agentDistributionProfileKey);
    }
    
    get agentRecruitmentProfileKey(): CaiAgentRecruitmentProfiles.Entry | undefined {
      const collection = <CaiAgentRecruitmentProfiles.Entry[]>this.collectionCache.getCollection(CaiAgentRecruitmentProfiles.KEY, CaiAgentRecruitmentProfiles.Entry);
      return collection.find(entry => entry.key === this._agentRecruitmentProfileKey);
    }
    
    get reliabilityPolicyKey(): CaiPersonalitiesReliabilityPolicies.Entry | undefined {
      const collection = <CaiPersonalitiesReliabilityPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesReliabilityPolicies.KEY, CaiPersonalitiesReliabilityPolicies.Entry);
      return collection.find(entry => entry.key === this._reliabilityPolicyKey);
    }
    
    get religiousConversionPolicy(): CaiPersonalitiesReligiousConversionPolicies.Entry | undefined {
      const collection = <CaiPersonalitiesReligiousConversionPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesReligiousConversionPolicies.KEY, CaiPersonalitiesReligiousConversionPolicies.Entry);
      return collection.find(entry => entry.key === this._religiousConversionPolicy);
    }
    
    get militaryAggressivenessPolicy(): CaiMilitaryAggressivenessPolicies.Entry | undefined {
      const collection = <CaiMilitaryAggressivenessPolicies.Entry[]>this.collectionCache.getCollection(CaiMilitaryAggressivenessPolicies.KEY, CaiMilitaryAggressivenessPolicies.Entry);
      return collection.find(entry => entry.key === this._militaryAggressivenessPolicy);
    }
    
    get militaryBehaviourPolicy(): CaiMilitaryBehaviourPolicies.Entry | undefined {
      const collection = <CaiMilitaryBehaviourPolicies.Entry[]>this.collectionCache.getCollection(CaiMilitaryBehaviourPolicies.KEY, CaiMilitaryBehaviourPolicies.Entry);
      return collection.find(entry => entry.key === this._militaryBehaviourPolicy);
    }
    
    get diplomaticComponent(): CaiPersonalityDiplomaticComponents.Entry | undefined {
      const collection = <CaiPersonalityDiplomaticComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDiplomaticComponents.KEY, CaiPersonalityDiplomaticComponents.Entry);
      return collection.find(entry => entry.id === this._diplomaticComponent);
    }
    
    get strategicComponent(): CaiPersonalityStrategicComponents.Entry | undefined {
      const collection = <CaiPersonalityStrategicComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityStrategicComponents.KEY, CaiPersonalityStrategicComponents.Entry);
      return collection.find(entry => entry.id === this._strategicComponent);
    }
    
    get culturalComponent(): CaiPersonalityCulturalComponents.Entry | undefined {
      const collection = <CaiPersonalityCulturalComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityCulturalComponents.KEY, CaiPersonalityCulturalComponents.Entry);
      return collection.find(entry => entry.id === this._culturalComponent);
    }
    
    get dealEvaluationComponent(): CaiPersonalityDealEvaluationComponents.Entry | undefined {
      const collection = <CaiPersonalityDealEvaluationComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDealEvaluationComponents.KEY, CaiPersonalityDealEvaluationComponents.Entry);
      return collection.find(entry => entry.id === this._dealEvaluationComponent);
    }
    
    get dealGenerationComponent(): CaiPersonalityDealGenerationComponents.Entry | undefined {
      const collection = <CaiPersonalityDealGenerationComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDealGenerationComponents.KEY, CaiPersonalityDealGenerationComponents.Entry);
      return collection.find(entry => entry.id === this._dealGenerationComponent);
    }
    
    get constructionSystemPolicy(): CaiPersonalitiesConstructionSystemPolicies.Entry | undefined {
      const collection = <CaiPersonalitiesConstructionSystemPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesConstructionSystemPolicies.KEY, CaiPersonalitiesConstructionSystemPolicies.Entry);
      return collection.find(entry => entry.key === this._constructionSystemPolicy);
    }
    
    get taskManagementSystemTaskGenerationProfile(): CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles.Entry | undefined {
      const collection = <CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles.KEY, CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles.Entry);
      return collection.find(entry => entry.key === this._taskManagementSystemTaskGenerationProfile);
    }
    
    get negotiationComponent(): CaiPersonalityNegotiationComponents.Entry | undefined {
      const collection = <CaiPersonalityNegotiationComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityNegotiationComponents.KEY, CaiPersonalityNegotiationComponents.Entry);
      return collection.find(entry => entry.id === this._negotiationComponent);
    }
    
    get incomeAllocationPolicy(): CaiPersonalitiesIncomeAllocationPolicies.Entry | undefined {
      const collection = <CaiPersonalitiesIncomeAllocationPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesIncomeAllocationPolicies.KEY, CaiPersonalitiesIncomeAllocationPolicies.Entry);
      return collection.find(entry => entry.key === this._incomeAllocationPolicy);
    }
    
    get occupationDecisionComponent(): CaiPersonalityOccupationDecisionComponents.Entry | undefined {
      const collection = <CaiPersonalityOccupationDecisionComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityOccupationDecisionComponents.KEY, CaiPersonalityOccupationDecisionComponents.Entry);
      return collection.find(entry => entry.id === this._occupationDecisionComponent);
    }
    
    get religiousComponent(): CaiPersonalityReligiousComponents.Entry | undefined {
      const collection = <CaiPersonalityReligiousComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityReligiousComponents.KEY, CaiPersonalityReligiousComponents.Entry);
      return collection.find(entry => entry.id === this._religiousComponent);
    }
    
    get empireRivalryComponent(): CaiPersonalityEmpireRivalryComponents.Entry | undefined {
      const collection = <CaiPersonalityEmpireRivalryComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityEmpireRivalryComponents.KEY, CaiPersonalityEmpireRivalryComponents.Entry);
      return collection.find(entry => entry.key === this._empireRivalryComponent);
    }
    
    get religionChanageManagementPolicy(): CaiPersonalitiesReligionChangeManagementPolicies.Entry | undefined {
      const collection = <CaiPersonalitiesReligionChangeManagementPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesReligionChangeManagementPolicies.KEY, CaiPersonalitiesReligionChangeManagementPolicies.Entry);
      return collection.find(entry => entry.key === this._religionChanageManagementPolicy);
    }
    
    get trespassingComponent(): CaiPersonalityTrespassingComponents.Entry | undefined {
      const collection = <CaiPersonalityTrespassingComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityTrespassingComponents.KEY, CaiPersonalityTrespassingComponents.Entry);
      return collection.find(entry => entry.key === this._trespassingComponent);
    }
    
    get agentEmbedProfile(): CaiAgentEmbedProfiles.Entry | undefined {
      const collection = <CaiAgentEmbedProfiles.Entry[]>this.collectionCache.getCollection(CaiAgentEmbedProfiles.KEY, CaiAgentEmbedProfiles.Entry);
      return collection.find(entry => entry.key === this._agentEmbedProfile);
    }
    
    get characterSkillSelectionPolicy(): CaiPersonalitiesCharacterSkillSelectionPolicies.Entry | undefined {
      const collection = <CaiPersonalitiesCharacterSkillSelectionPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesCharacterSkillSelectionPolicies.KEY, CaiPersonalitiesCharacterSkillSelectionPolicies.Entry);
      return collection.find(entry => entry.key === this._characterSkillSelectionPolicy);
    }
    
    get diplomaticAttitudeComponent(): CaiPersonalityDiplomaticAttitudeComponents.Entry | undefined {
      const collection = <CaiPersonalityDiplomaticAttitudeComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDiplomaticAttitudeComponents.KEY, CaiPersonalityDiplomaticAttitudeComponents.Entry);
      return collection.find(entry => entry.id === this._diplomaticAttitudeComponent);
    }
    
    get characterRoleComponent(): CaiPersonalityCharacterRoleComponents.Entry | undefined {
      const collection = <CaiPersonalityCharacterRoleComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityCharacterRoleComponents.KEY, CaiPersonalityCharacterRoleComponents.Entry);
      return collection.find(entry => entry.id === this._characterRoleComponent);
    }
    
    get militaryGeneratorConfigOverride(): CdirMilitaryGeneratorConfigs.Entry | undefined {
      const collection = <CdirMilitaryGeneratorConfigs.Entry[]>this.collectionCache.getCollection(CdirMilitaryGeneratorConfigs.KEY, CdirMilitaryGeneratorConfigs.Entry);
      return collection.find(entry => entry.key === this._militaryGeneratorConfigOverride);
    }
    
    get displayName(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._displayName);
    }
    
    get captivesComponent(): CaiPersonalityCaptiveComponents.Entry | undefined {
      const collection = <CaiPersonalityCaptiveComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityCaptiveComponents.KEY, CaiPersonalityCaptiveComponents.Entry);
      return collection.find(entry => entry.id === this._captivesComponent);
    }
    
    get tmsVariablesProfile(): CaiPersonalitiesTaskManagementSystemVariableProfiles.Entry | undefined {
      const collection = <CaiPersonalitiesTaskManagementSystemVariableProfiles.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesTaskManagementSystemVariableProfiles.KEY, CaiPersonalitiesTaskManagementSystemVariableProfiles.Entry);
      return collection.find(entry => entry.key === this._tmsVariablesProfile);
    }
    
    get surrenderComponent(): CaiPersonalitySurrenderComponents.Entry | undefined {
      const collection = <CaiPersonalitySurrenderComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalitySurrenderComponents.KEY, CaiPersonalitySurrenderComponents.Entry);
      return collection.find(entry => entry.key === this._surrenderComponent);
    }
    
    get financialContextControl(): CaiPersonalityFinancialContextControls.Entry | undefined {
      const collection = <CaiPersonalityFinancialContextControls.Entry[]>this.collectionCache.getCollection(CaiPersonalityFinancialContextControls.KEY, CaiPersonalityFinancialContextControls.Entry);
      return collection.find(entry => entry.financialContextControlProfile === this._financialContextControl);
    }
  }
}

export default CaiPersonalities;
