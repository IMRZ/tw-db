
import { CollectionCache, CollectionKey } from "../../../common";


export namespace FactionPotentialBonusValuePlayerFilters {
  export const KEY = new CollectionKey("faction_potential_bonus_value_player_filters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly player: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.player = values["player"];
    }
    
  }
}

export default FactionPotentialBonusValuePlayerFilters;
