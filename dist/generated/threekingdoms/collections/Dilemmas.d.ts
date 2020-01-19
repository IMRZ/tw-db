import { CollectionCache, CollectionKey } from "../../../common";
import { CdirEventsCategories } from "./CdirEventsCategories";
export declare namespace Dilemmas {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedTitle: string;
        readonly localisedDescription: string;
        readonly uiImage: string;
        readonly generate: boolean;
        readonly prioritized: boolean;
        readonly _eventCategory: string;
        readonly soundPopupOverride: string;
        readonly soundClickOverride: string;
        readonly iconOverride: string;
        constructor(collectionCache: CollectionCache, values: any);
        get eventCategory(): CdirEventsCategories.Entry | undefined;
    }
}
export default Dilemmas;
