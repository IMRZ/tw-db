
import { CollectionCache, CollectionKey } from "../../../common";
import { EncyclopediaTutorialVideos } from "./EncyclopediaTutorialVideos";

export namespace EncyclopediaTutorialVideoSubtitles {
  export const KEY = new CollectionKey("encyclopedia_tutorial_video_subtitles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly subtitleNumber: number;
    readonly timecodeIn: string;
    readonly timecodeOut: string;
    readonly text: string;
    readonly line: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this.subtitleNumber = values["subtitle_number"];
      this.timecodeIn = values["timecode_in"];
      this.timecodeOut = values["timecode_out"];
      this.text = values["text"];
      this.line = values["line"];
    }
    
    get key(): EncyclopediaTutorialVideos.Entry | undefined {
      const collection = <EncyclopediaTutorialVideos.Entry[]>this.collectionCache.getCollection(EncyclopediaTutorialVideos.KEY, EncyclopediaTutorialVideos.Entry);
      return collection.find(entry => entry.key === this._key);
    }
  }
}

export default EncyclopediaTutorialVideoSubtitles;
