import { CollectionCache, CollectionKey } from "../../../common";
import { UiCharacterActionCategories } from "./UiCharacterActionCategories";
export declare namespace UiCharacterActions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedTitle: string;
        readonly localisedDescription: string;
        readonly localisedFallbackTooltip: string;
        readonly requiresTarget: boolean;
        readonly _category: string;
        readonly performedByCharacter: boolean;
        readonly soundEventId: string;
        constructor(collectionCache: CollectionCache, values: any);
        get category(): UiCharacterActionCategories.Entry | undefined;
    }
}
export default UiCharacterActions;
