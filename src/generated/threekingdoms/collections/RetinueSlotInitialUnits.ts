
import { CollectionCache, CollectionKey } from "../../../common";
import { Retinues } from "./Retinues";
import { MainUnits } from "./MainUnits";
import { Campaigns } from "./Campaigns";

export namespace RetinueSlotInitialUnits {
  export const KEY = new CollectionKey("retinue_slot_initial_units");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _retinue: string;
    readonly slotIndex: number;
    readonly _initialUnitRecord: string;
    readonly _campaign: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._retinue = values["retinue"];
      this.slotIndex = values["slot_index"];
      this._initialUnitRecord = values["initial_unit_record"];
      this._campaign = values["campaign"];
    }
    
    get retinue(): Retinues.Entry | undefined {
      const collection = <Retinues.Entry[]>this.collectionCache.getCollection(Retinues.KEY, Retinues.Entry);
      return collection.find(entry => entry.key === this._retinue);
    }
    
    get initialUnitRecord(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._initialUnitRecord);
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
  }
}

export default RetinueSlotInitialUnits;
