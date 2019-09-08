
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UniqueAgentSpawnBehaviours {
  export const KEY = new CollectionKey("unique_agent_spawn_behaviours");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default UniqueAgentSpawnBehaviours;
