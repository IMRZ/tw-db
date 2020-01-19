
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleAiParameters {
  export const KEY = new CollectionKey("battle_ai_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly parameter: string;
    readonly default: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.parameter = values["parameter"];
      this.default = values["default"];
    }
    
  }
}

export default BattleAiParameters;
