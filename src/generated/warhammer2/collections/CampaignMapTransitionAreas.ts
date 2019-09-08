
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignMapTransitionAreas {
  export const KEY = new CollectionKey("campaign_map_transition_areas");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _mapname: any;
    readonly index: number;
    readonly minx: number;
    readonly miny: number;
    readonly maxx: number;
    readonly maxy: number;
    readonly stormChancePercentage: number;
    readonly onscreenName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._mapname = values["mapname"];
      this.index = values["index"];
      this.minx = values["minx"];
      this.miny = values["miny"];
      this.maxx = values["maxx"];
      this.maxy = values["maxy"];
      this.stormChancePercentage = values["storm_chance_percentage"];
      this.onscreenName = values["onscreen_name"];
    }
    
  }
}

export default CampaignMapTransitionAreas;
