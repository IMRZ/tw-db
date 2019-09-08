
import { CollectionCache, CollectionKey } from "../../../common";
import { Slots } from "./Slots";

export namespace CampaignMapSlotsTemplates {
  export const KEY = new CollectionKey("campaign_map_slots_templates");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly templateName: string;
    readonly _slot: string;
    readonly levels: number;
    readonly artFile: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.templateName = values["template_name"];
      this._slot = values["slot"];
      this.levels = values["levels"];
      this.artFile = values["art_file"];
    }
    
    get slot(): Slots.Entry | undefined {
      const collection = <Slots.Entry[]>this.collectionCache.getCollection(Slots.KEY, Slots.Entry);
      return collection.find(entry => entry.slot === this._slot);
    }
  }
}

export default CampaignMapSlotsTemplates;
