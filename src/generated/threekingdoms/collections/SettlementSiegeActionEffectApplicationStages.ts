
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SettlementSiegeActionEffectApplicationStages {
  export const KEY = new CollectionKey("settlement_siege_action_effect_application_stages");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly applicationStage: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.applicationStage = values["application_stage"];
    }
    
  }
}

export default SettlementSiegeActionEffectApplicationStages;
