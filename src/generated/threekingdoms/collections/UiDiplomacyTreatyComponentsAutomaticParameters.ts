
import { CollectionCache, CollectionKey } from "../../../common";
import { UiDiplomacyTreatyComponents } from "./UiDiplomacyTreatyComponents";
import { UiDiplomacyAutomaticParameters } from "./UiDiplomacyAutomaticParameters";

export namespace UiDiplomacyTreatyComponentsAutomaticParameters {
  export const KEY = new CollectionKey("ui_diplomacy_treaty_components_automatic_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _uiDiplomacyTreatyComponent: string;
    readonly _automaticParameter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._uiDiplomacyTreatyComponent = values["ui_diplomacy_treaty_component"];
      this._automaticParameter = values["automatic_parameter"];
    }
    
    get uiDiplomacyTreatyComponent(): UiDiplomacyTreatyComponents.Entry | undefined {
      const collection = <UiDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(UiDiplomacyTreatyComponents.KEY, UiDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._uiDiplomacyTreatyComponent);
    }
    
    get automaticParameter(): UiDiplomacyAutomaticParameters.Entry | undefined {
      const collection = <UiDiplomacyAutomaticParameters.Entry[]>this.collectionCache.getCollection(UiDiplomacyAutomaticParameters.KEY, UiDiplomacyAutomaticParameters.Entry);
      return collection.find(entry => entry.parameterType === this._automaticParameter);
    }
  }
}

export default UiDiplomacyTreatyComponentsAutomaticParameters;
