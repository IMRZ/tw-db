import { CollectionCache, CollectionKey } from "../../../common";
import { CdirEventsCategories } from "./CdirEventsCategories";
export declare namespace Incidents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly uiImage: string;
        readonly generate: boolean;
        readonly prioritised: boolean;
        readonly localisedTitle: string;
        readonly localisedDescription: string;
        readonly _eventCategory: string;
        constructor(collectionCache: CollectionCache, values: any);
        get eventCategory(): CdirEventsCategories.Entry | undefined;
    }
}
export default Incidents;
