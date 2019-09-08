import { CollectionCache, CollectionKey } from "../../../common";
import { VideoTypes } from "./VideoTypes";
import { VoScripts } from "./VoScripts";
export declare namespace Videos {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly videoName: string;
        readonly _videoType: string;
        readonly audioTracks: number;
        readonly _scriptRef: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly videoType: VideoTypes.Entry | undefined;
        readonly scriptRef: VoScripts.Entry | undefined;
    }
}
export default Videos;
