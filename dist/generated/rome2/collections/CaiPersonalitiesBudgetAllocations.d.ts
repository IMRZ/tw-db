import { CollectionCache, CollectionKey } from "../../../common";
import { TaxesLevels } from "./TaxesLevels";
export declare namespace CaiPersonalitiesBudgetAllocations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly armyFundsAllocationPercentage: number;
        readonly armyTurnsOfInactivityUntilCap: number;
        readonly armyFundingCap: number;
        readonly armyPercentageOfPoolToSaveOnFail: number;
        readonly navyFundsAllocationPercentage: number;
        readonly navyTurnsOfInactivityUntilCap: number;
        readonly navyFundingCap: number;
        readonly navyPercentageOfPoolToSaveOnFail: number;
        readonly agentsFundsAllocationPercentage: number;
        readonly agentsTurnsOfInactivityUntilCap: number;
        readonly agentsFundingCap: number;
        readonly agentsPercentageOfPoolToSaveOnFail: number;
        readonly constructionFundsAllocationPercentage: number;
        readonly constructionTurnsOfInactivityUntilCap: number;
        readonly constructionFundingCap: number;
        readonly constructionPercentageOfPoolToSaveOnFail: number;
        readonly diplomacyFundsAllocationPercentage: number;
        readonly diplomacyTurnsOfInactivityUntilCap: number;
        readonly diplomacyFundingCap: number;
        readonly diplomacyPercentageOfPoolToSaveOnFail: number;
        readonly _minimumSettableTaxLevel: string;
        readonly _maximumSettableTaxLevel: string;
        readonly technologyFundsAllocationPercentage: number;
        readonly technologyTurnsOfInactivityUntilCap: number;
        readonly technologyFundingCap: number;
        readonly technologyPercentageOfPoolToSaveOnFail: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly minimumSettableTaxLevel: TaxesLevels.Entry | undefined;
        readonly maximumSettableTaxLevel: TaxesLevels.Entry | undefined;
    }
}
export default CaiPersonalitiesBudgetAllocations;
