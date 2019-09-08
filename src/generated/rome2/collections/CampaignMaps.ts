
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignMaps {
  export const KEY = new CollectionKey("campaign_maps");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly mapname: string;
    readonly minx: number;
    readonly miny: number;
    readonly maxx: number;
    readonly maxy: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.mapname = values["mapname"];
      this.minx = values["minx"];
      this.miny = values["miny"];
      this.maxx = values["maxx"];
      this.maxy = values["maxy"];
    }
    
  }
}

export default CampaignMaps;
