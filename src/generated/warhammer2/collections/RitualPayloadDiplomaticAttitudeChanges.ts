
import { CollectionCache, CollectionKey } from "../../../common";
import { RitualPayloads } from "./RitualPayloads";

export namespace RitualPayloadDiplomaticAttitudeChanges {
  export const KEY = new CollectionKey("ritual_payload_diplomatic_attitude_changes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _payload: string;
    readonly attitudeDelta: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._payload = values["payload"];
      this.attitudeDelta = values["attitude_delta"];
    }
    
    get payload(): RitualPayloads.Entry | undefined {
      const collection = <RitualPayloads.Entry[]>this.collectionCache.getCollection(RitualPayloads.KEY, RitualPayloads.Entry);
      return collection.find(entry => entry.key === this._payload);
    }
  }
}

export default RitualPayloadDiplomaticAttitudeChanges;
