
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiConstructionSystemBlockingCategories {
  export const KEY = new CollectionKey("cai_construction_system_blocking_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly nonBlockingBonus: number;
    readonly blockingPenalty: number;
    readonly numberOfTurnsBeforeEnablingConversion: number;
    readonly numberOfTurnsBeforeEnablingDemolition: number;
    readonly absenceOfNonBlockingBuildingIsAProblem: boolean;
    readonly shouldDisableRecruitmentWhenBlocking: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.nonBlockingBonus = values["non_blocking_bonus"];
      this.blockingPenalty = values["blocking_penalty"];
      this.numberOfTurnsBeforeEnablingConversion = values["number_of_turns_before_enabling_conversion"];
      this.numberOfTurnsBeforeEnablingDemolition = values["number_of_turns_before_enabling_demolition"];
      this.absenceOfNonBlockingBuildingIsAProblem = !!values["absence_of_non_blocking_building_is_a_problem"];
      this.shouldDisableRecruitmentWhenBlocking = !!values["should_disable_recruitment_when_blocking"];
    }
    
  }
}

export default CaiConstructionSystemBlockingCategories;
