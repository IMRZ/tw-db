import { CollectionCache, CollectionKey } from "../../../common";
import { VideoTypes } from "./VideoTypes";
import { VoScripts } from "./VoScripts";
import { TexcExpansions } from "./TexcExpansions";
export declare namespace Videos {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly videoName: string;
        readonly _videoType: string;
        readonly audioTracks: number;
        readonly _scriptRef: number;
        readonly _gameExpansionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get videoType(): VideoTypes.Entry | undefined;
        get scriptRef(): VoScripts.Entry | undefined;
        get gameExpansionKey(): TexcExpansions.Entry | undefined;
    }
}
export default Videos;
