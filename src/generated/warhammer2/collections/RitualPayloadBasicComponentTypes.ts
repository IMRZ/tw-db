
import { CollectionCache, CollectionKey } from "../../../common";


export namespace RitualPayloadBasicComponentTypes {
  export const KEY = new CollectionKey("ritual_payload_basic_component_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default RitualPayloadBasicComponentTypes;
