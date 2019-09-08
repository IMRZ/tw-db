
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Cursors {
  export const KEY = new CollectionKey("cursors");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly image: string;
    readonly frames: number;
    readonly framerate: number;
    readonly hotspotX: number;
    readonly hotspotY: number;
    readonly loop: boolean;
    readonly width: number;
    readonly height: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.image = values["image"];
      this.frames = values["frames"];
      this.framerate = values["framerate"];
      this.hotspotX = values["hotspotX"];
      this.hotspotY = values["hotspotY"];
      this.loop = !!values["loop"];
      this.width = values["width"];
      this.height = values["height"];
    }
    
  }
}

export default Cursors;
