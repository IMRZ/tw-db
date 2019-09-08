
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMarkerTypes } from "./CampaignMarkerTypes";

export namespace CampaignInteractableMarkerInfos {
  export const KEY = new CollectionKey("campaign_interactable_marker_infos");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly name: string;
    readonly tooltip: string;
    readonly _markerType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.name = values["name"];
      this.tooltip = values["tooltip"];
      this._markerType = values["marker_type"];
    }
    
    get markerType(): CampaignMarkerTypes.Entry | undefined {
      const collection = <CampaignMarkerTypes.Entry[]>this.collectionCache.getCollection(CampaignMarkerTypes.KEY, CampaignMarkerTypes.Entry);
      return collection.find(entry => entry.id === this._markerType);
    }
  }
}

export default CampaignInteractableMarkerInfos;
