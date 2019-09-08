
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMarkerTypes } from "./CampaignMarkerTypes";
import { CampaignGroups } from "./CampaignGroups";

export namespace CampaignMarkers {
  export const KEY = new CollectionKey("campaign_markers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _markerType: string;
    readonly file: string;
    readonly _group: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._markerType = values["marker_type"];
      this.file = values["file"];
      this._group = values["group"];
    }
    
    get markerType(): CampaignMarkerTypes.Entry | undefined {
      const collection = <CampaignMarkerTypes.Entry[]>this.collectionCache.getCollection(CampaignMarkerTypes.KEY, CampaignMarkerTypes.Entry);
      return collection.find(entry => entry.id === this._markerType);
    }
    
    get group(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._group);
    }
  }
}

export default CampaignMarkers;
