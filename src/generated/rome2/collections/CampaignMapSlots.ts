
import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
import { Slots } from "./Slots";
import { CampaignMapSlotsTemplates } from "./CampaignMapSlotsTemplates";
import { WarscapeUnderlayTextures } from "./WarscapeUnderlayTextures";

export namespace CampaignMapSlots {
  export const KEY = new CollectionKey("campaign_map_slots");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly slotId: string;
    readonly _region: string;
    readonly _slotType: string;
    readonly _template: string;
    readonly rotation: number;
    readonly _underlay: string;
    readonly onscreen: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.slotId = values["slot_id"];
      this._region = values["region"];
      this._slotType = values["slot_type"];
      this._template = values["template"];
      this.rotation = values["rotation"];
      this._underlay = values["underlay"];
      this.onscreen = values["onscreen"];
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
    
    get underlay(): WarscapeUnderlayTextures.Entry | undefined {
      const collection = <WarscapeUnderlayTextures.Entry[]>this.collectionCache.getCollection(WarscapeUnderlayTextures.KEY, WarscapeUnderlayTextures.Entry);
      return collection.find(entry => entry.underlayKey === this._underlay);
    }
  }
}

export default CampaignMapSlots;
