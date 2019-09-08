
import { CollectionCache, CollectionKey } from "../../../common";


export namespace EncyclopediaTutorialSections {
  export const KEY = new CollectionKey("encyclopedia_tutorial_sections");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly section: string;
    readonly name: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.section = values["section"];
      this.name = values["name"];
    }
    
  }
}

export default EncyclopediaTutorialSections;
