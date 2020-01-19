import { CollectionCache, CollectionKey } from "../../../common";
import { EffectCategories } from "./EffectCategories";
import { ElementalGroups } from "./ElementalGroups";
import { EffectsGeneralisedDescriptions } from "./EffectsGeneralisedDescriptions";
import { UiEffectValueTypeEnums } from "./UiEffectValueTypeEnums";
import { EffectUiCategories } from "./EffectUiCategories";
export declare namespace Effects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
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
        constructor(collectionCache: CollectionCache, values: any);
        get category(): EffectCategories.Entry | undefined;
        get elementalGroup(): ElementalGroups.Entry | undefined;
        get generalisedDescription(): EffectsGeneralisedDescriptions.Entry | undefined;
        get iconSupplementColourType(): UiEffectValueTypeEnums.Entry | undefined;
        get uiCategory(): EffectUiCategories.Entry | undefined;
    }
}
export default Effects;
