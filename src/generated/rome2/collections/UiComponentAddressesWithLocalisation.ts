
import { CollectionCache, CollectionKey } from "../../../common";
import { UiComponentLocalisation } from "./UiComponentLocalisation";

export namespace UiComponentAddressesWithLocalisation {
  export const KEY = new CollectionKey("ui_component_addresses_with_localisation");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _componentLabel: string;
    readonly componentAddress: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._componentLabel = values["component_label"];
      this.componentAddress = values["component_address"];
    }
    
    get componentLabel(): UiComponentLocalisation.Entry | undefined {
      const collection = <UiComponentLocalisation.Entry[]>this.collectionCache.getCollection(UiComponentLocalisation.KEY, UiComponentLocalisation.Entry);
      return collection.find(entry => entry.componentLabel === this._componentLabel);
    }
  }
}

export default UiComponentAddressesWithLocalisation;
