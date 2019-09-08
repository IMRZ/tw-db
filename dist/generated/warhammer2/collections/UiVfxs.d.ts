import { CollectionCache, CollectionKey } from "../../../common";
import { GameAreaEnums } from "./GameAreaEnums";
export declare namespace UiVfxs {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly vfxName: string;
        readonly _gameArea: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly gameArea: GameAreaEnums.Entry | undefined;
    }
}
export default UiVfxs;
