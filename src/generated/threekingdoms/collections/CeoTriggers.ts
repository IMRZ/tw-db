
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTemplateManagerTypes } from "./CeoTemplateManagerTypes";

export namespace CeoTriggers {
  export const KEY = new CollectionKey("ceo_triggers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _targetLocation: string;
    readonly payloadDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._targetLocation = values["target_location"];
      this.payloadDescription = values["payload_description"];
    }
    
    get targetLocation(): CeoTemplateManagerTypes.Entry | undefined {
      const collection = <CeoTemplateManagerTypes.Entry[]>this.collectionCache.getCollection(CeoTemplateManagerTypes.KEY, CeoTemplateManagerTypes.Entry);
      return collection.find(entry => entry.key === this._targetLocation);
    }
  }
}

export default CeoTriggers;
