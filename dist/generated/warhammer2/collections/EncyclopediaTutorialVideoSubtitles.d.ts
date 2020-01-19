import { CollectionCache, CollectionKey } from "../../../common";
import { EncyclopediaTutorialVideos } from "./EncyclopediaTutorialVideos";
export declare namespace EncyclopediaTutorialVideoSubtitles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly subtitleNumber: number;
        readonly timecodeIn: string;
        readonly timecodeOut: string;
        readonly text: string;
        readonly line: number;
        constructor(collectionCache: CollectionCache, values: any);
        get key(): EncyclopediaTutorialVideos.Entry | undefined;
    }
}
export default EncyclopediaTutorialVideoSubtitles;
