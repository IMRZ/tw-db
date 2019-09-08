
import { CollectionCache, CollectionKey } from "../../../common";
import { Governorships } from "./Governorships";
import { Campaigns } from "./Campaigns";

export namespace StartPosGovernorships {
  export const KEY = new CollectionKey("start_pos_governorships");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _governorship: string;
    readonly _campaign: string;
    readonly lowerClassTaxRate: number;
    readonly upperClassTaxRate: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._governorship = values["governorship"];
      this._campaign = values["campaign"];
      this.lowerClassTaxRate = values["lower_class_tax_rate"];
      this.upperClassTaxRate = values["upper_class_tax_rate"];
    }
    
    get governorship(): Governorships.Entry | undefined {
      const collection = <Governorships.Entry[]>this.collectionCache.getCollection(Governorships.KEY, Governorships.Entry);
      return collection.find(entry => entry.governorship === this._governorship);
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
  }
}

export default StartPosGovernorships;
