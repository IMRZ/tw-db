import { CollectionCache, CollectionKey } from "../../../common";
import { CustomBattleLoadoutChallengeLevels } from "./CustomBattleLoadoutChallengeLevels";
export declare namespace CustomBattleLoadouts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly name: string;
        readonly description: string;
        readonly cost: number;
        readonly _challengeLevel: string;
        constructor(collectionCache: CollectionCache, values: any);
        get challengeLevel(): CustomBattleLoadoutChallengeLevels.Entry | undefined;
    }
}
export default CustomBattleLoadouts;
