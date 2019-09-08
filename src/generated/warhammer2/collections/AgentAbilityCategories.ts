
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AgentAbilityCategories {
  export const KEY = new CollectionKey("agent_ability_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly category: string;
    readonly onScreenName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.category = values["category"];
      this.onScreenName = values["on_screen_name"];
    }
    
  }
}

export default AgentAbilityCategories;
