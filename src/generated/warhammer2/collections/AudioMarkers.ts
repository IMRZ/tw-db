
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioMarkerTypes } from "./AudioMarkerTypes";

export namespace AudioMarkers {
  export const KEY = new CollectionKey("audio_markers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _type: string;
    readonly colourRed: number;
    readonly colourGreen: number;
    readonly colourBlue: number;
    readonly battleStart: string;
    readonly battleStop: string;
    readonly battleRtpc: string;
    readonly campaignStart: string;
    readonly campaignStop: string;
    readonly campaignRtpc: string;
    readonly distanceBattle: number;
    readonly distanceCampaign: number;
    readonly minTime: number;
    readonly maxTime: number;
    readonly randomPosition: boolean;
    readonly flattenRtpcTo2D: boolean;
    readonly dopplerRtpcName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._type = values["type"];
      this.colourRed = values["colour_red"];
      this.colourGreen = values["colour_green"];
      this.colourBlue = values["colour_blue"];
      this.battleStart = values["battle_start"];
      this.battleStop = values["battle_stop"];
      this.battleRtpc = values["battle_rtpc"];
      this.campaignStart = values["campaign_start"];
      this.campaignStop = values["campaign_stop"];
      this.campaignRtpc = values["campaign_rtpc"];
      this.distanceBattle = values["distance_battle"];
      this.distanceCampaign = values["distance_campaign"];
      this.minTime = values["min_time"];
      this.maxTime = values["max_time"];
      this.randomPosition = !!values["random_position"];
      this.flattenRtpcTo2D = !!values["flatten_rtpc_to_2d"];
      this.dopplerRtpcName = values["doppler_rtpc_name"];
    }
    
    get type(): AudioMarkerTypes.Entry | undefined {
      const collection = <AudioMarkerTypes.Entry[]>this.collectionCache.getCollection(AudioMarkerTypes.KEY, AudioMarkerTypes.Entry);
      return collection.find(entry => entry.key === this._type);
    }
  }
}

export default AudioMarkers;
