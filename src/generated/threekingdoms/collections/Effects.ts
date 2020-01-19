
import { CollectionCache, CollectionKey } from "../../../common";
import { EffectCategories } from "./EffectCategories";
import { ElementalGroups } from "./ElementalGroups";
import { EffectsGeneralisedDescriptions } from "./EffectsGeneralisedDescriptions";
import { UiEffectValueTypeEnums } from "./UiEffectValueTypeEnums";
import { EffectUiCategories } from "./EffectUiCategories";

export namespace Effects {
  export const KEY = new CollectionKey("effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly effect: string;
    readonly icon: string;
    readonly description: string;
    readonly priority: number;
    readonly _category: string;
    readonly _elementalGroup: string;
    readonly _generalisedDescription: string;
    readonly maxValue: number;
    readonly valueFormat: string;
    readonly _iconSupplementColourType: string;
    readonly _uiCategory: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.effect = values["effect"];
      this.icon = values["icon"];
      this.description = values["description"];
      this.priority = values["priority"];
      this._category = values["category"];
      this._elementalGroup = values["elemental_group"];
      this._generalisedDescription = values["generalised_description"];
      this.maxValue = values["max_value"];
      this.valueFormat = values["value_format"];
      this._iconSupplementColourType = values["icon_supplement_colour_type"];
      this._uiCategory = values["ui_category"];
    }
    
    get category(): EffectCategories.Entry | undefined {
      const collection = <EffectCategories.Entry[]>this.collectionCache.getCollection(EffectCategories.KEY, EffectCategories.Entry);
      return collection.find(entry => entry.key === this._category);
    }
    
    get elementalGroup(): ElementalGroups.Entry | undefined {
      const collection = <ElementalGroups.Entry[]>this.collectionCache.getCollection(ElementalGroups.KEY, ElementalGroups.Entry);
      return collection.find(entry => entry.key === this._elementalGroup);
    }
    
    get generalisedDescription(): EffectsGeneralisedDescriptions.Entry | undefined {
      const collection = <EffectsGeneralisedDescriptions.Entry[]>this.collectionCache.getCollection(EffectsGeneralisedDescriptions.KEY, EffectsGeneralisedDescriptions.Entry);
      return collection.find(entry => entry.key === this._generalisedDescription);
    }
    
    get iconSupplementColourType(): UiEffectValueTypeEnums.Entry | undefined {
      const collection = <UiEffectValueTypeEnums.Entry[]>this.collectionCache.getCollection(UiEffectValueTypeEnums.KEY, UiEffectValueTypeEnums.Entry);
      return collection.find(entry => entry.type === this._iconSupplementColourType);
    }
    
    get uiCategory(): EffectUiCategories.Entry | undefined {
      const collection = <EffectUiCategories.Entry[]>this.collectionCache.getCollection(EffectUiCategories.KEY, EffectUiCategories.Entry);
      return collection.find(entry => entry.key === this._uiCategory);
    }
  }
}

export default Effects;
