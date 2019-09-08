
import { CollectionCache, CollectionKey } from "../../../common";
import { TraitTriggers } from "./TraitTriggers";
import { TraitInfo } from "./TraitInfo";
import { TexcExpansions } from "./TexcExpansions";

export namespace TriggerEffects {
  export const KEY = new CollectionKey("trigger_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _trigger: string;
    readonly _trait: string;
    readonly value: number;
    readonly chance: number;
    readonly _gameExpansionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._trigger = values["trigger"];
      this._trait = values["trait"];
      this.value = values["value"];
      this.chance = values["chance"];
      this._gameExpansionKey = values["game_expansion_key"];
    }
    
    get trigger(): TraitTriggers.Entry | undefined {
      const collection = <TraitTriggers.Entry[]>this.collectionCache.getCollection(TraitTriggers.KEY, TraitTriggers.Entry);
      return collection.find(entry => entry.trigger === this._trigger);
    }
    
    get trait(): TraitInfo.Entry | undefined {
      const collection = <TraitInfo.Entry[]>this.collectionCache.getCollection(TraitInfo.KEY, TraitInfo.Entry);
      return collection.find(entry => entry.trait === this._trait);
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
  }
}

export default TriggerEffects;
