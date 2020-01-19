
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityOccupationDecisionComponents } from "./CaiPersonalityOccupationDecisionComponents";
import { CaiTaskManagementSystemTaskTypes } from "./CaiTaskManagementSystemTaskTypes";
import { SettlementSiegeActionOptions } from "./SettlementSiegeActionOptions";

export namespace CaiPersonalityOccupationDecisionPriorities {
  export const KEY = new CollectionKey("cai_personality_occupation_decision_priorities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _componentId: string;
    readonly _taskId: string;
    readonly _decisionId: string;
    readonly settledPriorityTarget: number;
    readonly settledPriorityOpportunistic: number;
    readonly regionlessPriorityTarget: number;
    readonly regionlessPriorityOpportunistic: number;
    readonly hordePriorityTarget: number;
    readonly hordePriorityOpportunistic: number;
    readonly migratingPriorityTarget: number;
    readonly migratingPriorityOpportunistic: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._componentId = values["component_id"];
      this._taskId = values["task_id"];
      this._decisionId = values["decision_id"];
      this.settledPriorityTarget = values["settled_priority_target"];
      this.settledPriorityOpportunistic = values["settled_priority_opportunistic"];
      this.regionlessPriorityTarget = values["regionless_priority_target"];
      this.regionlessPriorityOpportunistic = values["regionless_priority_opportunistic"];
      this.hordePriorityTarget = values["horde_priority_target"];
      this.hordePriorityOpportunistic = values["horde_priority_opportunistic"];
      this.migratingPriorityTarget = values["migrating_priority_target"];
      this.migratingPriorityOpportunistic = values["migrating_priority_opportunistic"];
    }
    
    get componentId(): CaiPersonalityOccupationDecisionComponents.Entry | undefined {
      const collection = <CaiPersonalityOccupationDecisionComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityOccupationDecisionComponents.KEY, CaiPersonalityOccupationDecisionComponents.Entry);
      return collection.find(entry => entry.id === this._componentId);
    }
    
    get taskId(): CaiTaskManagementSystemTaskTypes.Entry | undefined {
      const collection = <CaiTaskManagementSystemTaskTypes.Entry[]>this.collectionCache.getCollection(CaiTaskManagementSystemTaskTypes.KEY, CaiTaskManagementSystemTaskTypes.Entry);
      return collection.find(entry => entry.type === this._taskId);
    }
    
    get decisionId(): SettlementSiegeActionOptions.Entry | undefined {
      const collection = <SettlementSiegeActionOptions.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionOptions.KEY, SettlementSiegeActionOptions.Entry);
      return collection.find(entry => entry.settlementSiegeActionOption === this._decisionId);
    }
  }
}

export default CaiPersonalityOccupationDecisionPriorities;
