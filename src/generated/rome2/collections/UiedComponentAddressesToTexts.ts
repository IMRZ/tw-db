
import { CollectionCache, CollectionKey } from "../../../common";
import { UiedComponentTexts } from "./UiedComponentTexts";
import { UiedTextLayouts } from "./UiedTextLayouts";

export namespace UiedComponentAddressesToTexts {
  export const KEY = new CollectionKey("uied_component_addresses_to_texts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _componentLabel: string;
    readonly componentAddress: string;
    readonly _componentLayout: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._componentLabel = values["component_label"];
      this.componentAddress = values["component_address"];
      this._componentLayout = values["component_layout"];
    }
    
    get componentLabel(): UiedComponentTexts.Entry | undefined {
      const collection = <UiedComponentTexts.Entry[]>this.collectionCache.getCollection(UiedComponentTexts.KEY, UiedComponentTexts.Entry);
      return collection.find(entry => entry.componentLabel === this._componentLabel);
    }
    
    get componentLayout(): UiedTextLayouts.Entry | undefined {
      const collection = <UiedTextLayouts.Entry[]>this.collectionCache.getCollection(UiedTextLayouts.KEY, UiedTextLayouts.Entry);
      return collection.find(entry => entry.layoutId === this._componentLayout);
    }
  }
}

export default UiedComponentAddressesToTexts;
