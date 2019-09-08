import { CollectionCache, CollectionKey } from "../../../common";
import { GameAreaEnums } from "./GameAreaEnums";
export declare namespace UiLargeImages {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly imagePath: string;
        readonly _gameArea: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly gameArea: GameAreaEnums.Entry | undefined;
    }
}
export default UiLargeImages;
