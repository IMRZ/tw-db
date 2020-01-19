
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleResultCharacterCaptureDetails {
  export const KEY = new CollectionKey("battle_result_character_capture_details");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly battleResult: string;
    readonly captureChancePercentageMod: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.battleResult = values["battle_result"];
      this.captureChancePercentageMod = values["capture_chance_percentage_mod"];
    }
    
  }
}

export default BattleResultCharacterCaptureDetails;
