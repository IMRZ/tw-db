
import { CollectionCache, CollectionKey } from "../../../common";


export namespace DiplomacyNegotiationAttitudes {
  export const KEY = new CollectionKey("diplomacy_negotiation_attitudes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly minimumAttitude: number;
    readonly maximumAttitude: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.minimumAttitude = values["minimum_attitude"];
      this.maximumAttitude = values["maximum_attitude"];
    }
    
  }
}

export default DiplomacyNegotiationAttitudes;
