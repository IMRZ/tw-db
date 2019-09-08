
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioCampaignGroundTypes } from "./AudioCampaignGroundTypes";
import { Cursors } from "./Cursors";

export namespace CampaignGroundTypes {
  export const KEY = new CollectionKey("campaign_ground_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;
    readonly movementCost: number;
    readonly onscreenName: string;
    readonly isSea: boolean;
    readonly icon: string;
    readonly _audioType: string;
    readonly _standardCursor: string;
    readonly _selectionCursor: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
      this.movementCost = values["movement_cost"];
      this.onscreenName = values["onscreen_name"];
      this.isSea = !!values["is_sea"];
      this.icon = values["icon"];
      this._audioType = values["audio_type"];
      this._standardCursor = values["standard_cursor"];
      this._selectionCursor = values["selection_cursor"];
    }
    
    get audioType(): AudioCampaignGroundTypes.Entry | undefined {
      const collection = <AudioCampaignGroundTypes.Entry[]>this.collectionCache.getCollection(AudioCampaignGroundTypes.KEY, AudioCampaignGroundTypes.Entry);
      return collection.find(entry => entry.key === this._audioType);
    }
    
    get standardCursor(): Cursors.Entry | undefined {
      const collection = <Cursors.Entry[]>this.collectionCache.getCollection(Cursors.KEY, Cursors.Entry);
      return collection.find(entry => entry.key === this._standardCursor);
    }
    
    get selectionCursor(): Cursors.Entry | undefined {
      const collection = <Cursors.Entry[]>this.collectionCache.getCollection(Cursors.KEY, Cursors.Entry);
      return collection.find(entry => entry.key === this._selectionCursor);
    }
  }
}

export default CampaignGroundTypes;
