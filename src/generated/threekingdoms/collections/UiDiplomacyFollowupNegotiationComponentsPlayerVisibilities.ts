
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiDiplomacyFollowupNegotiationComponentsPlayerVisibilities {
  export const KEY = new CollectionKey("ui_diplomacy_followup_negotiation_components_player_visibilities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default UiDiplomacyFollowupNegotiationComponentsPlayerVisibilities;
