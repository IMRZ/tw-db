
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacyDeals } from "./StartPosDiplomacyDeals";
import { DiplomacyComponents } from "./DiplomacyComponents";
import { StartPosDiplomacyDetails } from "./StartPosDiplomacyDetails";

export namespace StartPosDiplomacyDealComponents {
  export const KEY = new CollectionKey("start_pos_diplomacy_deal_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _deal: string;
    readonly _component: string;
    readonly _details: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._deal = values["deal"];
      this._component = values["component"];
      this._details = values["details"];
    }
    
    get deal(): StartPosDiplomacyDeals.Entry | undefined {
      const collection = <StartPosDiplomacyDeals.Entry[]>this.collectionCache.getCollection(StartPosDiplomacyDeals.KEY, StartPosDiplomacyDeals.Entry);
      return collection.find(entry => entry.id === this._deal);
    }
    
    get component(): DiplomacyComponents.Entry | undefined {
      const collection = <DiplomacyComponents.Entry[]>this.collectionCache.getCollection(DiplomacyComponents.KEY, DiplomacyComponents.Entry);
      return collection.find(entry => entry.component === this._component);
    }
    
    get details(): StartPosDiplomacyDetails.Entry | undefined {
      const collection = <StartPosDiplomacyDetails.Entry[]>this.collectionCache.getCollection(StartPosDiplomacyDetails.KEY, StartPosDiplomacyDetails.Entry);
      return collection.find(entry => entry.id === this._details);
    }
  }
}

export default StartPosDiplomacyDealComponents;
