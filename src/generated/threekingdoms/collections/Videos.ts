
import { CollectionCache, CollectionKey } from "../../../common";
import { VideoTypes } from "./VideoTypes";
import { VoScripts } from "./VoScripts";

export namespace Videos {
  export const KEY = new CollectionKey("videos");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly videoName: string;
    readonly _videoType: string;
    readonly audioTracks: number;
    readonly _scriptRef: number;
    readonly audioTrackOverride: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.videoName = values["video_name"];
      this._videoType = values["video_type"];
      this.audioTracks = values["audio_tracks"];
      this._scriptRef = values["script_ref"];
      this.audioTrackOverride = values["audio_track_override"];
    }
    
    get videoType(): VideoTypes.Entry | undefined {
      const collection = <VideoTypes.Entry[]>this.collectionCache.getCollection(VideoTypes.KEY, VideoTypes.Entry);
      return collection.find(entry => entry.videoType === this._videoType);
    }
    
    get scriptRef(): VoScripts.Entry | undefined {
      const collection = <VoScripts.Entry[]>this.collectionCache.getCollection(VoScripts.KEY, VoScripts.Entry);
      return collection.find(entry => entry.id === this._scriptRef);
    }
  }
}

export default Videos;
