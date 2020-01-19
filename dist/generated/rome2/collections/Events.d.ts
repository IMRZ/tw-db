import { CollectionCache, CollectionKey } from "../../../common";
import { Seasons } from "./Seasons";
export declare namespace Events {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly pictureCategory: string;
        readonly dynamic: boolean;
        readonly onscreenName: string;
        readonly eventText: string;
        readonly historicalDate: number;
        readonly _season: string;
        readonly conditions: string;
        readonly picture: string;
        readonly turnInYear: number;
        constructor(collectionCache: CollectionCache, values: any);
        get season(): Seasons.Entry | undefined;
    }
}
export default Events;
