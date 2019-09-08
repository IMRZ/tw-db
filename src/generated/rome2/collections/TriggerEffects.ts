
import { CollectionCache, CollectionKey } from "../../../common";
import { TraitTriggers } from "./TraitTriggers";
import { TraitInfo } from "./TraitInfo";

export namespace TriggerEffects {
  export const KEY = new CollectionKey("trigger_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _trigger: string;
    readonly _trait: string;
    readonly value: number;
    readonly chance: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._trigger = values["trigger"];
      this._trait = values["trait"];
      this.value = values["value"];
      this.chance = values["chance"];
    }
    
    get trigger(): TraitTriggers.Entry | undefined {
      const collection = <TraitTriggers.Entry[]>this.collectionCache.getCollection(TraitTriggers.KEY, TraitTriggers.Entry);
      return collection.find(entry => entry.trigger === this._trigger);
    }
    
    get trait(): TraitInfo.Entry | undefined {
      const collection = <TraitInfo.Entry[]>this.collectionCache.getCollection(TraitInfo.KEY, TraitInfo.Entry);
      return collection.find(entry => entry.trait === this._trait);
    }
  }
}

export default TriggerEffects;
