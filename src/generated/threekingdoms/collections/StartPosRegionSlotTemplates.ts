
import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
import { Regions } from "./Regions";
import { SlotTypes } from "./SlotTypes";
import { SlotTemplates } from "./SlotTemplates";

export namespace StartPosRegionSlotTemplates {
  export const KEY = new CollectionKey("start_pos_region_slot_templates");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _campaign: string;
    readonly _region: string;
    readonly _slotType: string;
    readonly _slotTemplate: string;
    readonly unique: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._campaign = values["campaign"];
      this._region = values["region"];
      this._slotType = values["slot_type"];
      this._slotTemplate = values["slot_template"];
      this.unique = !!values["unique"];
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
    
    get region(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._region);
    }
    
    get slotType(): SlotTypes.Entry | undefined {
      const collection = <SlotTypes.Entry[]>this.collectionCache.getCollection(SlotTypes.KEY, SlotTypes.Entry);
      return collection.find(entry => entry.key === this._slotType);
    }
    
    get slotTemplate(): SlotTemplates.Entry | undefined {
      const collection = <SlotTemplates.Entry[]>this.collectionCache.getCollection(SlotTemplates.KEY, SlotTemplates.Entry);
      return collection.find(entry => entry.key === this._slotTemplate);
    }
  }
}

export default StartPosRegionSlotTemplates;
