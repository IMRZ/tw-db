
import { CollectionCache, CollectionKey } from "../../../common";
import { TriggerEvents } from "./TriggerEvents";

export namespace AdviceTriggers {
  export const KEY = new CollectionKey("advice_triggers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _testWhen: string;
    readonly conditionScript: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._testWhen = values["test_when"];
      this.conditionScript = values["condition_script"];
    }
    
    get testWhen(): TriggerEvents.Entry | undefined {
      const collection = <TriggerEvents.Entry[]>this.collectionCache.getCollection(TriggerEvents.KEY, TriggerEvents.Entry);
      return collection.find(entry => entry.event === this._testWhen);
    }
  }
}

export default AdviceTriggers;
