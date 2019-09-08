import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattleCameras {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly minHeight: number;
        readonly maxHeightSmall: number;
        readonly maxHeightLarge: number;
        readonly minFortMaxHeight: number;
        readonly moveSpeedMinMultiplier: number;
        readonly moveSpeedMaxMultiplier: number;
        readonly turnSpeedMultiplier: number;
        readonly moveFastMultiplier: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattleCameras;
