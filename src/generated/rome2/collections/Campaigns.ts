
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMaps } from "./CampaignMaps";

export namespace Campaigns {
  export const KEY = new CollectionKey("campaigns");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly campaignName: string;
    readonly onscreenName: string;
    readonly description: string;
    readonly _mapName: string;
    readonly dataDirectory: string;
    readonly isGrand: boolean;
    readonly exportable: boolean;
    readonly campaignOrder: number;
    readonly bulletList: string;
    readonly displayLocation: string;
    readonly isTutorial: boolean;
    readonly bannerImage: string;
    readonly bannerIcon: string;
    readonly availableForMp: boolean;
    readonly mpSortOrder: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.campaignName = values["campaign_name"];
      this.onscreenName = values["onscreen_name"];
      this.description = values["description"];
      this._mapName = values["map_name"];
      this.dataDirectory = values["data_directory"];
      this.isGrand = !!values["is_grand"];
      this.exportable = !!values["exportable"];
      this.campaignOrder = values["campaign_order"];
      this.bulletList = values["bullet_list"];
      this.displayLocation = values["display_location"];
      this.isTutorial = !!values["is_tutorial"];
      this.bannerImage = values["banner_image"];
      this.bannerIcon = values["banner_icon"];
      this.availableForMp = !!values["available_for_mp"];
      this.mpSortOrder = values["mp_sort_order"];
    }
    
    get mapName(): CampaignMaps.Entry | undefined {
      const collection = <CampaignMaps.Entry[]>this.collectionCache.getCollection(CampaignMaps.KEY, CampaignMaps.Entry);
      return collection.find(entry => entry.mapname === this._mapName);
    }
  }
}

export default Campaigns;
