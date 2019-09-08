import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AudioBattleEnvironmentReverbs {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly name: string;
        readonly auxFl: string;
        readonly auxFr: string;
        readonly auxRl: string;
        readonly auxRr: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AudioBattleEnvironmentReverbs;
