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
export declare namespace CaiPersonalities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
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
        constructor(collectionCache: CollectionCache, values: any);
        readonly budgetPolicyKey: CaiPersonalitiesBudgetPolicies.Entry | undefined;
        readonly technologyManagerKey: CampaignAiTechnologyManagers.Entry | undefined;
        readonly characterSkillTreeManagerKey: CampaignAiCharacterSkillTreeManagers.Entry | undefined;
        readonly agentDistributionProfileKey: CaiAgentDistributionProfiles.Entry | undefined;
        readonly agentRecruitmentProfileKey: CaiAgentRecruitmentProfiles.Entry | undefined;
        readonly reliabilityPolicyKey: CaiPersonalitiesReliabilityPolicies.Entry | undefined;
        readonly religiousConversionPolicy: CaiPersonalitiesReligiousConversionPolicies.Entry | undefined;
        readonly militaryAggressivenessPolicy: CaiMilitaryAggressivenessPolicies.Entry | undefined;
        readonly militaryBehaviourPolicy: CaiMilitaryBehaviourPolicies.Entry | undefined;
        readonly diplomaticComponent: CaiPersonalityDiplomaticComponents.Entry | undefined;
        readonly strategicComponent: CaiPersonalityStrategicComponents.Entry | undefined;
        readonly culturalComponent: CaiPersonalityCulturalComponents.Entry | undefined;
        readonly dealEvaluationComponent: CaiPersonalityDealEvaluationComponents.Entry | undefined;
        readonly dealGenerationComponent: CaiPersonalityDealGenerationComponents.Entry | undefined;
        readonly constructionSystemPolicy: CaiPersonalitiesConstructionSystemPolicies.Entry | undefined;
        readonly taskManagementSystemTaskGenerationProfile: CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles.Entry | undefined;
        readonly negotiationComponent: CaiPersonalityNegotiationComponents.Entry | undefined;
        readonly incomeAllocationPolicy: CaiPersonalitiesIncomeAllocationPolicies.Entry | undefined;
        readonly occupationDecisionComponent: CaiPersonalityOccupationDecisionComponents.Entry | undefined;
    }
}
export default CaiPersonalities;
