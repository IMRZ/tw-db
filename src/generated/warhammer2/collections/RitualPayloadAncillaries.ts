
import { CollectionCache, CollectionKey } from "../../../common";
import { RitualPayloads } from "./RitualPayloads";
import { Ancillaries } from "./Ancillaries";

export namespace RitualPayloadAncillaries {
  export const KEY = new CollectionKey("ritual_payload_ancillaries");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _payload: string;
    readonly _ancillary: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._payload = values["payload"];
      this._ancillary = values["ancillary"];
    }
    
    get payload(): RitualPayloads.Entry | undefined {
      const collection = <RitualPayloads.Entry[]>this.collectionCache.getCollection(RitualPayloads.KEY, RitualPayloads.Entry);
      return collection.find(entry => entry.key === this._payload);
    }
    
    get ancillary(): Ancillaries.Entry | undefined {
      const collection = <Ancillaries.Entry[]>this.collectionCache.getCollection(Ancillaries.KEY, Ancillaries.Entry);
      return collection.find(entry => entry._key === this._ancillary);
    }
  }
}

export default RitualPayloadAncillaries;
