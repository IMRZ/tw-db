
import { CollectionCache, CollectionKey } from "../../../common";


export namespace WorldPowerTokenCaptureOutcomes {
  export const KEY = new CollectionKey("world_power_token_capture_outcomes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default WorldPowerTokenCaptureOutcomes;
