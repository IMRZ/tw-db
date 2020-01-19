
import { CollectionCache, CollectionKey } from "../../../common";
import { TaxesLevels } from "./TaxesLevels";

export namespace CaiPersonalitiesBudgetAllocations {
  export const KEY = new CollectionKey("cai_personalities_budget_allocations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

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
    readonly armyUpkeepAllocationPercentage: number;
    readonly navyUpkeepAllocationPercentage: number;
    readonly agentsUpkeepAllocationPercentage: number;
    readonly constructionUpkeepAllocationPercentage: number;
    readonly diplomacyUpkeepAllocationPercentage: number;
    readonly technologyUpkeepAllocationPercentage: number;
    readonly characterFundsAllocationPercentage: number;
    readonly characterTurnsOfInactivityUntilCap: number;
    readonly characterFundingCap: number;
    readonly characterPercentageOfPoolToSaveOnFail: number;
    readonly characterUpkeepAllocationPercentage: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.armyFundsAllocationPercentage = values["army_funds_allocation_percentage"];
      this.armyTurnsOfInactivityUntilCap = values["army_turns_of_inactivity_until_cap"];
      this.armyFundingCap = values["army_funding_cap"];
      this.armyPercentageOfPoolToSaveOnFail = values["army_percentage_of_pool_to_save_on_fail"];
      this.navyFundsAllocationPercentage = values["navy_funds_allocation_percentage"];
      this.navyTurnsOfInactivityUntilCap = values["navy_turns_of_inactivity_until_cap"];
      this.navyFundingCap = values["navy_funding_cap"];
      this.navyPercentageOfPoolToSaveOnFail = values["navy_percentage_of_pool_to_save_on_fail"];
      this.agentsFundsAllocationPercentage = values["agents_funds_allocation_percentage"];
      this.agentsTurnsOfInactivityUntilCap = values["agents_turns_of_inactivity_until_cap"];
      this.agentsFundingCap = values["agents_funding_cap"];
      this.agentsPercentageOfPoolToSaveOnFail = values["agents_percentage_of_pool_to_save_on_fail"];
      this.constructionFundsAllocationPercentage = values["construction_funds_allocation_percentage"];
      this.constructionTurnsOfInactivityUntilCap = values["construction_turns_of_inactivity_until_cap"];
      this.constructionFundingCap = values["construction_funding_cap"];
      this.constructionPercentageOfPoolToSaveOnFail = values["construction_percentage_of_pool_to_save_on_fail"];
      this.diplomacyFundsAllocationPercentage = values["diplomacy_funds_allocation_percentage"];
      this.diplomacyTurnsOfInactivityUntilCap = values["diplomacy_turns_of_inactivity_until_cap"];
      this.diplomacyFundingCap = values["diplomacy_funding_cap"];
      this.diplomacyPercentageOfPoolToSaveOnFail = values["diplomacy_percentage_of_pool_to_save_on_fail"];
      this._minimumSettableTaxLevel = values["minimum_settable_tax_level"];
      this._maximumSettableTaxLevel = values["maximum_settable_tax_level"];
      this.technologyFundsAllocationPercentage = values["technology_funds_allocation_percentage"];
      this.technologyTurnsOfInactivityUntilCap = values["technology_turns_of_inactivity_until_cap"];
      this.technologyFundingCap = values["technology_funding_cap"];
      this.technologyPercentageOfPoolToSaveOnFail = values["technology_percentage_of_pool_to_save_on_fail"];
      this.armyUpkeepAllocationPercentage = values["army_upkeep_allocation_percentage"];
      this.navyUpkeepAllocationPercentage = values["navy_upkeep_allocation_percentage"];
      this.agentsUpkeepAllocationPercentage = values["agents_upkeep_allocation_percentage"];
      this.constructionUpkeepAllocationPercentage = values["construction_upkeep_allocation_percentage"];
      this.diplomacyUpkeepAllocationPercentage = values["diplomacy_upkeep_allocation_percentage"];
      this.technologyUpkeepAllocationPercentage = values["technology_upkeep_allocation_percentage"];
      this.characterFundsAllocationPercentage = values["character_funds_allocation_percentage"];
      this.characterTurnsOfInactivityUntilCap = values["character_turns_of_inactivity_until_cap"];
      this.characterFundingCap = values["character_funding_cap"];
      this.characterPercentageOfPoolToSaveOnFail = values["character_percentage_of_pool_to_save_on_fail"];
      this.characterUpkeepAllocationPercentage = values["character_upkeep_allocation_percentage"];
    }
    
    get minimumSettableTaxLevel(): TaxesLevels.Entry | undefined {
      const collection = <TaxesLevels.Entry[]>this.collectionCache.getCollection(TaxesLevels.KEY, TaxesLevels.Entry);
      return collection.find(entry => entry.taxLevel === this._minimumSettableTaxLevel);
    }
    
    get maximumSettableTaxLevel(): TaxesLevels.Entry | undefined {
      const collection = <TaxesLevels.Entry[]>this.collectionCache.getCollection(TaxesLevels.KEY, TaxesLevels.Entry);
      return collection.find(entry => entry.taxLevel === this._maximumSettableTaxLevel);
    }
  }
}

export default CaiPersonalitiesBudgetAllocations;
