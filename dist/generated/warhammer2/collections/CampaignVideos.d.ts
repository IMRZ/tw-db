import { CollectionCache, CollectionKey } from "../../../common";
import { Videos } from "./Videos";
import { Cultures } from "./Cultures";
import { Pdlc } from "./Pdlc";
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
        readonly _pdlc: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly videoName: Videos.Entry | undefined;
        readonly culture: Cultures.Entry | undefined;
        readonly pdlc: Pdlc.Entry | undefined;
    }
}
export default CampaignVideos;
