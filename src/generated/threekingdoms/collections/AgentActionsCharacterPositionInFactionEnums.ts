
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AgentActionsCharacterPositionInFactionEnums {
  export const KEY = new CollectionKey("agent_actions_character_position_in_faction_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default AgentActionsCharacterPositionInFactionEnums;
