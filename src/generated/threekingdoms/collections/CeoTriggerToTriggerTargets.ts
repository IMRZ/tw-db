
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTriggers } from "./CeoTriggers";
import { CeoTriggerTargets } from "./CeoTriggerTargets";

export namespace CeoTriggerToTriggerTargets {
  export const KEY = new CollectionKey("ceo_trigger_to_trigger_targets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _trigger: string;
    readonly _triggerTarget: string;
    readonly processOrderPriority: number;
    readonly autoId: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._trigger = values["trigger"];
      this._triggerTarget = values["trigger_target"];
      this.processOrderPriority = values["process_order_priority"];
      this.autoId = values["auto_id"];
    }
    
    get trigger(): CeoTriggers.Entry | undefined {
      const collection = <CeoTriggers.Entry[]>this.collectionCache.getCollection(CeoTriggers.KEY, CeoTriggers.Entry);
      return collection.find(entry => entry.key === this._trigger);
    }
    
    get triggerTarget(): CeoTriggerTargets.Entry | undefined {
      const collection = <CeoTriggerTargets.Entry[]>this.collectionCache.getCollection(CeoTriggerTargets.KEY, CeoTriggerTargets.Entry);
      return collection.find(entry => entry.key === this._triggerTarget);
    }
  }
}

export default CeoTriggerToTriggerTargets;
