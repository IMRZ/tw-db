
import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityStances } from "./SpecialAbilityStances";
import { AnimationTriggers } from "./AnimationTriggers";

export namespace SpecialAbilityAnimations {
  export const KEY = new CollectionKey("special_ability_animations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _stance: string;
    readonly _trigger: string;
    readonly fullbody: boolean;
    readonly spliced: boolean;
    readonly infantry: boolean;
    readonly cavalry: boolean;
    readonly _enemyReaction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._stance = values["stance"];
      this._trigger = values["trigger"];
      this.fullbody = !!values["fullbody"];
      this.spliced = !!values["spliced"];
      this.infantry = !!values["infantry"];
      this.cavalry = !!values["cavalry"];
      this._enemyReaction = values["enemy_reaction"];
    }
    
    get stance(): SpecialAbilityStances.Entry | undefined {
      const collection = <SpecialAbilityStances.Entry[]>this.collectionCache.getCollection(SpecialAbilityStances.KEY, SpecialAbilityStances.Entry);
      return collection.find(entry => entry.key === this._stance);
    }
    
    get trigger(): AnimationTriggers.Entry | undefined {
      const collection = <AnimationTriggers.Entry[]>this.collectionCache.getCollection(AnimationTriggers.KEY, AnimationTriggers.Entry);
      return collection.find(entry => entry.key === this._trigger);
    }
    
    get enemyReaction(): AnimationTriggers.Entry | undefined {
      const collection = <AnimationTriggers.Entry[]>this.collectionCache.getCollection(AnimationTriggers.KEY, AnimationTriggers.Entry);
      return collection.find(entry => entry.key === this._enemyReaction);
    }
  }
}

export default SpecialAbilityAnimations;
