import { CollectionCache, CollectionKey } from "../../../common";
import { Videos } from "./Videos";
import { Cultures } from "./Cultures";
export declare namespace CampaignVideos {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _videoName: string;
        readonly localisedTitle: string;
        readonly _culture: string;
        readonly campaignLocked: boolean;
        readonly stillPath: string;
        readonly sort: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly videoName: Videos.Entry | undefined;
        readonly culture: Cultures.Entry | undefined;
    }
}
export default CampaignVideos;
