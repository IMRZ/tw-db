
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMaps } from "./CampaignMaps";
import { TexcExpansions } from "./TexcExpansions";
import { Videos } from "./Videos";

export namespace CampaignMapPlayableAreas {
  export const KEY = new CollectionKey("campaign_map_playable_areas");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _mapname: string;
    readonly index: number;
    readonly minx: number;
    readonly maxx: number;
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
    readonly terrainFolder: string;
    readonly maxy: number;
    readonly miny: number;
    readonly campaignKey: string;
    readonly frontendImage: string;
    readonly _gameExpansionKey: string;
    readonly onscreenDescription: string;
    readonly _video: string;
    readonly isMpcAvailable: boolean;
    readonly campaignOverlayLookup: string;
    readonly campaignOverlayMap: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._mapname = values["mapname"];
      this.index = values["index"];
      this.minx = values["minx"];
      this.maxx = values["maxx"];
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
      this.terrainFolder = values["terrain_folder"];
      this.maxy = values["maxy"];
      this.miny = values["miny"];
      this.campaignKey = values["campaign_key"];
      this.frontendImage = values["frontend_image"];
      this._gameExpansionKey = values["game_expansion_key"];
      this.onscreenDescription = values["onscreen_description"];
      this._video = values["video"];
      this.isMpcAvailable = !!values["is_mpc_available"];
      this.campaignOverlayLookup = values["campaign_overlay_lookup"];
      this.campaignOverlayMap = values["campaign_overlay_map"];
    }
    
    get mapname(): CampaignMaps.Entry | undefined {
      const collection = <CampaignMaps.Entry[]>this.collectionCache.getCollection(CampaignMaps.KEY, CampaignMaps.Entry);
      return collection.find(entry => entry.mapname === this._mapname);
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
    
    get video(): Videos.Entry | undefined {
      const collection = <Videos.Entry[]>this.collectionCache.getCollection(Videos.KEY, Videos.Entry);
      return collection.find(entry => entry.videoName === this._video);
    }
  }
}

export default CampaignMapPlayableAreas;
