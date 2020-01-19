import { CollectionCache, CollectionKey } from "../../../common";
import { TechnologyCategories } from "./TechnologyCategories";
import { UiColours } from "./UiColours";
export declare namespace TechnologyCategoryUiColours {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _technologyCategory: string;
        readonly _researchedColour: string;
        readonly _unresearchedColour: string;
        constructor(collectionCache: CollectionCache, values: any);
        get technologyCategory(): TechnologyCategories.Entry | undefined;
        get researchedColour(): UiColours.Entry | undefined;
        get unresearchedColour(): UiColours.Entry | undefined;
    }
}
export default TechnologyCategoryUiColours;
