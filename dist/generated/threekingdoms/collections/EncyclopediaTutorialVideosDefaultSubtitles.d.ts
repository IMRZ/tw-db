import { CollectionCache, CollectionKey } from "../../../common";
import { EncyclopediaTutorialVideos } from "./EncyclopediaTutorialVideos";
import { Languages } from "./Languages";
export declare namespace EncyclopediaTutorialVideosDefaultSubtitles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _video: string;
        readonly _language: string;
        constructor(collectionCache: CollectionCache, values: any);
        get video(): EncyclopediaTutorialVideos.Entry | undefined;
        get language(): Languages.Entry | undefined;
    }
}
export default EncyclopediaTutorialVideosDefaultSubtitles;
