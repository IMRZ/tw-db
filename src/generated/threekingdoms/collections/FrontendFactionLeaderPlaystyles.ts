
import { CollectionCache, CollectionKey } from "../../../common";


export namespace FrontendFactionLeaderPlaystyles {
  export const KEY = new CollectionKey("frontend_faction_leader_playstyles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedTitle: string;
    readonly localisedTooltip: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedTitle = values["localised_title"];
      this.localisedTooltip = values["localised_tooltip"];
    }
    
  }
}

export default FrontendFactionLeaderPlaystyles;
