
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioCampaignBuildings {
  export const KEY = new CollectionKey("audio_campaign_buildings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly ambienceStartEvent: string;
    readonly ambienceStopEvent: string;
    readonly ambienceOnlyPlayIfPrimary: boolean;
    readonly ambienceOnlyPlayIfPort: boolean;
    readonly oneShotEvent: string;
    readonly oneShotMinTime: number;
    readonly oneShotMaxTime: number;
    readonly oneShotOnlyPlayIfPrimary: boolean;
    readonly oneShotOnlyPlayIfPort: boolean;
    readonly selectedEvent: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.ambienceStartEvent = values["ambience_start_event"];
      this.ambienceStopEvent = values["ambience_stop_event"];
      this.ambienceOnlyPlayIfPrimary = !!values["ambience_only_play_if_primary"];
      this.ambienceOnlyPlayIfPort = !!values["ambience_only_play_if_port"];
      this.oneShotEvent = values["one_shot_event"];
      this.oneShotMinTime = values["one_shot_min_time"];
      this.oneShotMaxTime = values["one_shot_max_time"];
      this.oneShotOnlyPlayIfPrimary = !!values["one_shot_only_play_if_primary"];
      this.oneShotOnlyPlayIfPort = !!values["one_shot_only_play_if_port"];
      this.selectedEvent = values["selected_event"];
    }
    
  }
}

export default AudioCampaignBuildings;
