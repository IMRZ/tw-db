
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTriggerBehaviourEnums } from "./CeoTriggerBehaviourEnums";
import { Ceos } from "./Ceos";
import { CeoGroups } from "./CeoGroups";

export namespace CeoTriggerTargets {
  export const KEY = new CollectionKey("ceo_trigger_targets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _triggerBehaviour: string;
    readonly _targetIndividualCeo: string;
    readonly _targetGroup: string;
    readonly numToTarget: number;
    readonly minPointsApplied: number;
    readonly maxPointsApplied: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._triggerBehaviour = values["trigger_behaviour"];
      this._targetIndividualCeo = values["target_individual_ceo"];
      this._targetGroup = values["target_group"];
      this.numToTarget = values["num_to_target"];
      this.minPointsApplied = values["min_points_applied"];
      this.maxPointsApplied = values["max_points_applied"];
    }
    
    get triggerBehaviour(): CeoTriggerBehaviourEnums.Entry | undefined {
      const collection = <CeoTriggerBehaviourEnums.Entry[]>this.collectionCache.getCollection(CeoTriggerBehaviourEnums.KEY, CeoTriggerBehaviourEnums.Entry);
      return collection.find(entry => entry.key === this._triggerBehaviour);
    }
    
    get targetIndividualCeo(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._targetIndividualCeo);
    }
    
    get targetGroup(): CeoGroups.Entry | undefined {
      const collection = <CeoGroups.Entry[]>this.collectionCache.getCollection(CeoGroups.KEY, CeoGroups.Entry);
      return collection.find(entry => entry.key === this._targetGroup);
    }
  }
}

export default CeoTriggerTargets;
