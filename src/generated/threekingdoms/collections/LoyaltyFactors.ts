
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoSets } from "./CeoSets";

export namespace LoyaltyFactors {
  export const KEY = new CollectionKey("loyalty_factors");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly minimumValue: number;
    readonly maximumValue: number;
    readonly localisedNegativeName: string;
    readonly localisedPositiveName: string;
    readonly ignoreReset: boolean;
    readonly _dataDrivenFactorRequiresCeoEquippedInSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.minimumValue = values["minimum_value"];
      this.maximumValue = values["maximum_value"];
      this.localisedNegativeName = values["localised_negative_name"];
      this.localisedPositiveName = values["localised_positive_name"];
      this.ignoreReset = !!values["ignore_reset"];
      this._dataDrivenFactorRequiresCeoEquippedInSet = values["data_driven_factor_requires_ceo_equipped_in_set"];
    }
    
    get dataDrivenFactorRequiresCeoEquippedInSet(): CeoSets.Entry | undefined {
      const collection = <CeoSets.Entry[]>this.collectionCache.getCollection(CeoSets.KEY, CeoSets.Entry);
      return collection.find(entry => entry.key === this._dataDrivenFactorRequiresCeoEquippedInSet);
    }
  }
}

export default LoyaltyFactors;
