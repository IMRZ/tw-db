
import { CollectionCache, CollectionKey } from "../../../common";
import { AgentAbilityCategories } from "./AgentAbilityCategories";

export namespace Abilities {
  export const KEY = new CollectionKey("abilities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly ability: string;
    readonly onScreenName: string;
    readonly onScreenDescription: string;
    readonly _category: string;
    readonly onScreenTarget: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.ability = values["ability"];
      this.onScreenName = values["on_screen_name"];
      this.onScreenDescription = values["on_screen_description"];
      this._category = values["category"];
      this.onScreenTarget = values["on_screen_target"];
    }
    
    get category(): AgentAbilityCategories.Entry | undefined {
      const collection = <AgentAbilityCategories.Entry[]>this.collectionCache.getCollection(AgentAbilityCategories.KEY, AgentAbilityCategories.Entry);
      return collection.find(entry => entry.category === this._category);
    }
  }
}

export default Abilities;
