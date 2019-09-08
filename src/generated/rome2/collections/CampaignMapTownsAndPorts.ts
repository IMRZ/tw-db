
import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
import { Slots } from "./Slots";
import { CampaignMapSlotsTemplates } from "./CampaignMapSlotsTemplates";

export namespace CampaignMapTownsAndPorts {
  export const KEY = new CollectionKey("campaign_map_towns_and_ports");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly townId: string;
    readonly _region: string;
    readonly _slotType: string;
    readonly onscreenName: string;
    readonly _template: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.townId = values["town_id"];
      this._region = values["region"];
      this._slotType = values["slot_type"];
      this.onscreenName = values["onscreen_name"];
      this._template = values["template"];
    }
    
    get region(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._region);
    }
    
    get slotType(): Slots.Entry | undefined {
      const collection = <Slots.Entry[]>this.collectionCache.getCollection(Slots.KEY, Slots.Entry);
      return collection.find(entry => entry.slot === this._slotType);
    }
    
    get template(): CampaignMapSlotsTemplates.Entry | undefined {
      const collection = <CampaignMapSlotsTemplates.Entry[]>this.collectionCache.getCollection(CampaignMapSlotsTemplates.KEY, CampaignMapSlotsTemplates.Entry);
      return collection.find(entry => entry.templateName === this._template);
    }
  }
}

export default CampaignMapTownsAndPorts;
