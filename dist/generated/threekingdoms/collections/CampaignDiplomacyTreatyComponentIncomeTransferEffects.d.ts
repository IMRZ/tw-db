import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
export declare namespace CampaignDiplomacyTreatyComponentIncomeTransferEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _component: string;
        readonly incomeTransferredToProposer: boolean;
        readonly percentageOfVaryingRegularIncome: number;
        readonly additionalPercentagePerSettledHordeUnit: number;
        readonly maximumAdditionalPercentageFromSettledHordeUnits: number;
        readonly maximumIncomeTransferred: number;
        readonly regularIncomeFactorPercentage: string;
        readonly varyingRegularIncomeFactorPercentage: string;
        readonly instantIncomeFactorPercentage: string;
        readonly maximumRegularIncomeTransferred: number;
        readonly maximumVaryingRegularIncomeTransferred: number;
        readonly maximumInstantIncomeTransferred: number;
        readonly incomeDividedByNumOfSubjects: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get component(): CampaignDiplomacyTreatyComponents.Entry | undefined;
    }
}
export default CampaignDiplomacyTreatyComponentIncomeTransferEffects;
