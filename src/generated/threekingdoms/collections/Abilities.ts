
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Abilities {
  export const KEY = new CollectionKey("abilities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly ability: string;
    readonly onScreenName: string;
    readonly onScreenDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.ability = values["ability"];
      this.onScreenName = values["on_screen_name"];
      this.onScreenDescription = values["on_screen_description"];
    }
    
  }
}

export default Abilities;
