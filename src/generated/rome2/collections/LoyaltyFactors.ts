
import { CollectionCache, CollectionKey } from "../../../common";


export namespace LoyaltyFactors {
  export const KEY = new CollectionKey("loyalty_factors");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly minimumValue: number;
    readonly maximumValue: number;
    readonly localisedNegativeName: string;
    readonly localisedPositiveName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.minimumValue = values["minimum_value"];
      this.maximumValue = values["maximum_value"];
      this.localisedNegativeName = values["localised_negative_name"];
      this.localisedPositiveName = values["localised_positive_name"];
    }
    
  }
}

export default LoyaltyFactors;
