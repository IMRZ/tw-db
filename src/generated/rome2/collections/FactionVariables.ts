
import { CollectionCache, CollectionKey } from "../../../common";


export namespace FactionVariables {
  export const KEY = new CollectionKey("faction_variables");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly factionVariableKey: string;
    readonly value: string;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.factionVariableKey = values["faction_variable_key"];
      this.value = values["value"];
      this.description = values["description"];
    }
    
  }
}

export default FactionVariables;
