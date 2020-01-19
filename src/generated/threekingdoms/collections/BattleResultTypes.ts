
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleResultTypes {
  export const KEY = new CollectionKey("battle_result_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly battleResultType: string;
    readonly resultScreenName: string;
    readonly resultDescription: string;
    readonly unitXpGain: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.battleResultType = values["battle_result_type"];
      this.resultScreenName = values["result_screen_name"];
      this.resultDescription = values["result_description"];
      this.unitXpGain = values["unit_xp_gain"];
    }
    
  }
}

export default BattleResultTypes;
