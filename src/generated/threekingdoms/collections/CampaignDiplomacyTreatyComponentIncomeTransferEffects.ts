
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";

export namespace CampaignDiplomacyTreatyComponentIncomeTransferEffects {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_component_income_transfer_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

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

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._component = values["component"];
      this.incomeTransferredToProposer = !!values["income_transferred_to_proposer"];
      this.percentageOfVaryingRegularIncome = values["percentage_of_varying_regular_income"];
      this.additionalPercentagePerSettledHordeUnit = values["additional_percentage_per_settled_horde_unit"];
      this.maximumAdditionalPercentageFromSettledHordeUnits = values["maximum_additional_percentage_from_settled_horde_units"];
      this.maximumIncomeTransferred = values["maximum_income_transferred"];
      this.regularIncomeFactorPercentage = values["regular_income_factor_percentage"];
      this.varyingRegularIncomeFactorPercentage = values["varying_regular_income_factor_percentage"];
      this.instantIncomeFactorPercentage = values["instant_income_factor_percentage"];
      this.maximumRegularIncomeTransferred = values["maximum_regular_income_transferred"];
      this.maximumVaryingRegularIncomeTransferred = values["maximum_varying_regular_income_transferred"];
      this.maximumInstantIncomeTransferred = values["maximum_instant_income_transferred"];
      this.incomeDividedByNumOfSubjects = !!values["income_divided_by_num_of_subjects"];
    }
    
    get component(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._component);
    }
  }
}

export default CampaignDiplomacyTreatyComponentIncomeTransferEffects;
