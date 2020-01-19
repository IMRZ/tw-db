import { CollectionCache, CollectionKey } from "../../../common";
import { UiMinisterialPositions } from "./UiMinisterialPositions";
import { UiMinisterialPositionCategories } from "./UiMinisterialPositionCategories";
export declare namespace UiMinisterialPositionsToCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _uiMinisterialPosition: string;
        readonly _category: string;
        constructor(collectionCache: CollectionCache, values: any);
        get uiMinisterialPosition(): UiMinisterialPositions.Entry | undefined;
        get category(): UiMinisterialPositionCategories.Entry | undefined;
    }
}
export default UiMinisterialPositionsToCategories;
