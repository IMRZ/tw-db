
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesBudgetPolicies } from "./CaiPersonalitiesBudgetPolicies";
import { CampaignAiTechnologyManagers } from "./CampaignAiTechnologyManagers";
import { CampaignAiCharacterSkillTreeManagers } from "./CampaignAiCharacterSkillTreeManagers";
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

export namespace CaiPersonalities {
  export const KEY = new CollectionKey("cai_personalities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _budgetPolicyKey: string;
    readonly _technologyManagerKey: string;
    readonly _characterSkillTreeManagerKey: string;
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

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._budgetPolicyKey = values["budget_policy_key"];
      this._technologyManagerKey = values["technology_manager_key"];
      this._characterSkillTreeManagerKey = values["character_skill_tree_manager_key"];
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
    }
    
    get budgetPolicyKey(): CaiPersonalitiesBudgetPolicies.Entry | undefined {
      const collection = <CaiPersonalitiesBudgetPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesBudgetPolicies.KEY, CaiPersonalitiesBudgetPolicies.Entry);
      return collection.find(entry => entry.key === this._budgetPolicyKey);
    }
    
    get technologyManagerKey(): CampaignAiTechnologyManagers.Entry | undefined {
      const collection = <CampaignAiTechnologyManagers.Entry[]>this.collectionCache.getCollection(CampaignAiTechnologyManagers.KEY, CampaignAiTechnologyManagers.Entry);
      return collection.find(entry => entry.key === this._technologyManagerKey);
    }
    
    get characterSkillTreeManagerKey(): CampaignAiCharacterSkillTreeManagers.Entry | undefined {
      const collection = <CampaignAiCharacterSkillTreeManagers.Entry[]>this.collectionCache.getCollection(CampaignAiCharacterSkillTreeManagers.KEY, CampaignAiCharacterSkillTreeManagers.Entry);
      return collection.find(entry => entry.key === this._characterSkillTreeManagerKey);
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
  }
}

export default CaiPersonalities;
