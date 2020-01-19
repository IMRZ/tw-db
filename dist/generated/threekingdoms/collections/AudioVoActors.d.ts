import { CollectionCache, CollectionKey } from "../../../common";
import { TexcExpansions } from "./TexcExpansions";
export declare namespace AudioVoActors {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _gameExpansionKey: string;
        readonly textKey: string;
        readonly audioFilename: string;
        readonly fullVo: boolean;
        readonly genericHeroId: string;
        readonly genericElementType: string;
        readonly _fallbackActor: string;
        constructor(collectionCache: CollectionCache, values: any);
        get gameExpansionKey(): TexcExpansions.Entry | undefined;
        get fallbackActor(): AudioVoActors.Entry | undefined;
    }
}
export default AudioVoActors;
