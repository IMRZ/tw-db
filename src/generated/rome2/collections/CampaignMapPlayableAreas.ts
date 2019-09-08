
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMaps } from "./CampaignMaps";

export namespace CampaignMapPlayableAreas {
  export const KEY = new CollectionKey("campaign_map_playable_areas");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _mapname: string;
    readonly index: number;
    readonly minx: number;
    readonly maxx: number;
    readonly miny: number;
    readonly maxy: number;
    readonly seaTrade: boolean;
    readonly onscreenName: string;
    readonly mapFile: string;
    readonly overlayFile: string;
    readonly radarFile: string;
    readonly meaningfulId: string;
    readonly previewWidth: number;
    readonly previewHeight: number;
    readonly previewBorder: number;
    readonly minimapLookupFile: string;
    readonly isAvailableInCustomBattle: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._mapname = values["mapname"];
      this.index = values["index"];
      this.minx = values["minx"];
      this.maxx = values["maxx"];
      this.miny = values["miny"];
      this.maxy = values["maxy"];
      this.seaTrade = !!values["sea_trade"];
      this.onscreenName = values["onscreen_name"];
      this.mapFile = values["map_file"];
      this.overlayFile = values["overlay_file"];
      this.radarFile = values["radar_file"];
      this.meaningfulId = values["meaningful_id"];
      this.previewWidth = values["preview_width"];
      this.previewHeight = values["preview_height"];
      this.previewBorder = values["preview_border"];
      this.minimapLookupFile = values["minimap_lookup_file"];
      this.isAvailableInCustomBattle = !!values["is_available_in_custom_battle"];
    }
    
    get mapname(): CampaignMaps.Entry | undefined {
      const collection = <CampaignMaps.Entry[]>this.collectionCache.getCollection(CampaignMaps.KEY, CampaignMaps.Entry);
      return collection.find(entry => entry.mapname === this._mapname);
    }
  }
}

export default CampaignMapPlayableAreas;
