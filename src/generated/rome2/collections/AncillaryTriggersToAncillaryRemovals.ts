
import { CollectionCache, CollectionKey } from "../../../common";
import { AncillaryTriggers } from "./AncillaryTriggers";
import { AncillaryInfo } from "./AncillaryInfo";

export namespace AncillaryTriggersToAncillaryRemovals {
  export const KEY = new CollectionKey("ancillary_triggers_to_ancillary_removals");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _trigger: string;
    readonly _ancillary: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._trigger = values["trigger"];
      this._ancillary = values["ancillary"];
    }
    
    get trigger(): AncillaryTriggers.Entry | undefined {
      const collection = <AncillaryTriggers.Entry[]>this.collectionCache.getCollection(AncillaryTriggers.KEY, AncillaryTriggers.Entry);
      return collection.find(entry => entry.trigger === this._trigger);
    }
    
    get ancillary(): AncillaryInfo.Entry | undefined {
      const collection = <AncillaryInfo.Entry[]>this.collectionCache.getCollection(AncillaryInfo.KEY, AncillaryInfo.Entry);
      return collection.find(entry => entry.ancillary === this._ancillary);
    }
  }
}

export default AncillaryTriggersToAncillaryRemovals;
