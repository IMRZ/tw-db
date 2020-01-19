
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AgentSpawnReasonEnums {
  export const KEY = new CollectionKey("agent_spawn_reason_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default AgentSpawnReasonEnums;
