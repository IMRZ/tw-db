
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalitiesReligionChangeManagementPolicies {
  export const KEY = new CollectionKey("cai_personalities_religion_change_management_policies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly proportionOverMeanStateReligionValueForReligionChangeTick: number;
    readonly religionChangeTicksRequiredToChange: number;
    readonly percentProbabilityOfReligionChangeOnceThresholdReached: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.proportionOverMeanStateReligionValueForReligionChangeTick = values["proportion_over_mean_state_religion_value_for_religion_change_tick"];
      this.religionChangeTicksRequiredToChange = values["religion_change_ticks_required_to_change"];
      this.percentProbabilityOfReligionChangeOnceThresholdReached = values["percent_probability_of_religion_change_once_threshold_reached"];
    }
    
  }
}

export default CaiPersonalitiesReligionChangeManagementPolicies;
