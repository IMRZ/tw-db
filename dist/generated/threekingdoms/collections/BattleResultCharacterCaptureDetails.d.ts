import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattleResultCharacterCaptureDetails {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly battleResult: string;
        readonly captureChancePercentageMod: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattleResultCharacterCaptureDetails;
