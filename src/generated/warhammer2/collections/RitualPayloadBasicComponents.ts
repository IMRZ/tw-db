
import { CollectionCache, CollectionKey } from "../../../common";
import { RitualPayloads } from "./RitualPayloads";
import { RitualPayloadBasicComponentTypes } from "./RitualPayloadBasicComponentTypes";

export namespace RitualPayloadBasicComponents {
  export const KEY = new CollectionKey("ritual_payload_basic_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _payload: string;
    readonly _component: string;
    readonly value: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._payload = values["payload"];
      this._component = values["component"];
      this.value = values["value"];
    }
    
    get payload(): RitualPayloads.Entry | undefined {
      const collection = <RitualPayloads.Entry[]>this.collectionCache.getCollection(RitualPayloads.KEY, RitualPayloads.Entry);
      return collection.find(entry => entry.key === this._payload);
    }
    
    get component(): RitualPayloadBasicComponentTypes.Entry | undefined {
      const collection = <RitualPayloadBasicComponentTypes.Entry[]>this.collectionCache.getCollection(RitualPayloadBasicComponentTypes.KEY, RitualPayloadBasicComponentTypes.Entry);
      return collection.find(entry => entry.id === this._component);
    }
  }
}

export default RitualPayloadBasicComponents;
