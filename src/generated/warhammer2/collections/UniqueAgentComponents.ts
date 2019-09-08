
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UniqueAgentComponents {
  export const KEY = new CollectionKey("unique_agent_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default UniqueAgentComponents;
