
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";

export namespace CampaignMarkers {
  export const KEY = new CollectionKey("campaign_markers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly file: string;
    readonly _group: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.file = values["file"];
      this._group = values["group"];
    }
    
    get group(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._group);
    }
  }
}

export default CampaignMarkers;
