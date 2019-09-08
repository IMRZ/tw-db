
import { CollectionCache, CollectionKey } from "../../../common";
import { VideoTypes } from "./VideoTypes";
import { VoScripts } from "./VoScripts";
import { TexcExpansions } from "./TexcExpansions";

export namespace Videos {
  export const KEY = new CollectionKey("videos");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly videoName: string;
    readonly _videoType: string;
    readonly audioTracks: number;
    readonly _scriptRef: number;
    readonly _gameExpansionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.videoName = values["video_name"];
      this._videoType = values["video_type"];
      this.audioTracks = values["audio_tracks"];
      this._scriptRef = values["script_ref"];
      this._gameExpansionKey = values["game_expansion_key"];
    }
    
    get videoType(): VideoTypes.Entry | undefined {
      const collection = <VideoTypes.Entry[]>this.collectionCache.getCollection(VideoTypes.KEY, VideoTypes.Entry);
      return collection.find(entry => entry.videoType === this._videoType);
    }
    
    get scriptRef(): VoScripts.Entry | undefined {
      const collection = <VoScripts.Entry[]>this.collectionCache.getCollection(VoScripts.KEY, VoScripts.Entry);
      return collection.find(entry => entry.id === this._scriptRef);
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
  }
}

export default Videos;
