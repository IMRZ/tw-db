
import { CollectionCache, CollectionKey } from "../../../common";
import { EncyclopediaTutorialSections } from "./EncyclopediaTutorialSections";

export namespace EncyclopediaTutorialVideos {
  export const KEY = new CollectionKey("encyclopedia_tutorial_videos");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly title: string;
    readonly _section: string;
    readonly file: string;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.title = values["title"];
      this._section = values["section"];
      this.file = values["file"];
      this.description = values["description"];
    }
    
    get section(): EncyclopediaTutorialSections.Entry | undefined {
      const collection = <EncyclopediaTutorialSections.Entry[]>this.collectionCache.getCollection(EncyclopediaTutorialSections.KEY, EncyclopediaTutorialSections.Entry);
      return collection.find(entry => entry.section === this._section);
    }
  }
}

export default EncyclopediaTutorialVideos;
