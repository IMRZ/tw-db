
import { CollectionCache, CollectionKey } from "../../../common";
import { UiEffectValueTypeEnums } from "./UiEffectValueTypeEnums";

export namespace UiResourceTransactionPooledResourceJunctions {
  export const KEY = new CollectionKey("ui_resource_transaction_pooled_resource_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _iconSupplementColourType: string;
    readonly iconPath: string;
    readonly order: number;
    readonly hideInUi: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._iconSupplementColourType = values["icon_supplement_colour_type"];
      this.iconPath = values["icon_path"];
      this.order = values["order"];
      this.hideInUi = !!values["hide_in_ui"];
    }
    
    get iconSupplementColourType(): UiEffectValueTypeEnums.Entry | undefined {
      const collection = <UiEffectValueTypeEnums.Entry[]>this.collectionCache.getCollection(UiEffectValueTypeEnums.KEY, UiEffectValueTypeEnums.Entry);
      return collection.find(entry => entry.type === this._iconSupplementColourType);
    }
  }
}

export default UiResourceTransactionPooledResourceJunctions;
