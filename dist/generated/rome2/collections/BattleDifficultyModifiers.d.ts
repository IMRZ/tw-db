import { CollectionCache, CollectionKey } from "../../../common";
import { UiUnitStats } from "./UiUnitStats";
export declare namespace BattleDifficultyModifiers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly difficultyLevel: string;
        readonly human: boolean;
        readonly stat: string;
        readonly _value: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly value: UiUnitStats.Entry | undefined;
    }
}
export default BattleDifficultyModifiers;
