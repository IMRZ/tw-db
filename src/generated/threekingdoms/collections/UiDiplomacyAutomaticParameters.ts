
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiDiplomacyAutomaticParameters {
  export const KEY = new CollectionKey("ui_diplomacy_automatic_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly parameterType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.parameterType = values["parameter_type"];
    }
    
  }
}

export default UiDiplomacyAutomaticParameters;
