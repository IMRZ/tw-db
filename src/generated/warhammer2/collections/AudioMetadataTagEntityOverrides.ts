
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioMetadataTags } from "./AudioMetadataTags";
import { AudioEntityTypes } from "./AudioEntityTypes";

export namespace AudioMetadataTagEntityOverrides {
  export const KEY = new CollectionKey("audio_metadata_tag_entity_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _metadataTag: string;
    readonly _entityType: string;
    readonly soundEventBattleStart: string;
    readonly soundEventBattleStop: string;
    readonly soundEventCampaignStart: string;
    readonly soundEventCampaignStop: string;
    readonly cullingDistanceOverride: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._metadataTag = values["metadata_tag"];
      this._entityType = values["entity_type"];
      this.soundEventBattleStart = values["sound_event_battle_start"];
      this.soundEventBattleStop = values["sound_event_battle_stop"];
      this.soundEventCampaignStart = values["sound_event_campaign_start"];
      this.soundEventCampaignStop = values["sound_event_campaign_stop"];
      this.cullingDistanceOverride = values["culling_distance_override"];
    }
    
    get metadataTag(): AudioMetadataTags.Entry | undefined {
      const collection = <AudioMetadataTags.Entry[]>this.collectionCache.getCollection(AudioMetadataTags.KEY, AudioMetadataTags.Entry);
      return collection.find(entry => entry.key === this._metadataTag);
    }
    
    get entityType(): AudioEntityTypes.Entry | undefined {
      const collection = <AudioEntityTypes.Entry[]>this.collectionCache.getCollection(AudioEntityTypes.KEY, AudioEntityTypes.Entry);
      return collection.find(entry => entry.key === this._entityType);
    }
  }
}

export default AudioMetadataTagEntityOverrides;
