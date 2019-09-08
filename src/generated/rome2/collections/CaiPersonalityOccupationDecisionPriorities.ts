
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityOccupationDecisionComponents } from "./CaiPersonalityOccupationDecisionComponents";

export namespace CaiPersonalityOccupationDecisionPriorities {
  export const KEY = new CollectionKey("cai_personality_occupation_decision_priorities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _componentId: string;
    readonly option: string;
    readonly lastStandPriority: number;
    readonly totalWarPriority: number;
    readonly warPriority: number;
    readonly tensionPriority: number;
    readonly peacePriority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._componentId = values["component_id"];
      this.option = values["option"];
      this.lastStandPriority = values["last_stand_priority"];
      this.totalWarPriority = values["total_war_priority"];
      this.warPriority = values["war_priority"];
      this.tensionPriority = values["tension_priority"];
      this.peacePriority = values["peace_priority"];
    }
    
    get componentId(): CaiPersonalityOccupationDecisionComponents.Entry | undefined {
      const collection = <CaiPersonalityOccupationDecisionComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityOccupationDecisionComponents.KEY, CaiPersonalityOccupationDecisionComponents.Entry);
      return collection.find(entry => entry.id === this._componentId);
    }
  }
}

export default CaiPersonalityOccupationDecisionPriorities;
