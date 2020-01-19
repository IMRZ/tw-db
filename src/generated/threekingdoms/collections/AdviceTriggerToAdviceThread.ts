
import { CollectionCache, CollectionKey } from "../../../common";
import { AdviceTriggers } from "./AdviceTriggers";
import { AdviceThreads } from "./AdviceThreads";

export namespace AdviceTriggerToAdviceThread {
  export const KEY = new CollectionKey("advice_trigger_to_advice_thread");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _trigger: string;
    readonly _thread: string;
    readonly amount: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._trigger = values["trigger"];
      this._thread = values["thread"];
      this.amount = values["amount"];
    }
    
    get trigger(): AdviceTriggers.Entry | undefined {
      const collection = <AdviceTriggers.Entry[]>this.collectionCache.getCollection(AdviceTriggers.KEY, AdviceTriggers.Entry);
      return collection.find(entry => entry.key === this._trigger);
    }
    
    get thread(): AdviceThreads.Entry | undefined {
      const collection = <AdviceThreads.Entry[]>this.collectionCache.getCollection(AdviceThreads.KEY, AdviceThreads.Entry);
      return collection.find(entry => entry.thread === this._thread);
    }
  }
}

export default AdviceTriggerToAdviceThread;
