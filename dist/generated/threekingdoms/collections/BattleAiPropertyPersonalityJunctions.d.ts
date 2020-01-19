import { CollectionCache, CollectionKey } from "../../../common";
import { BattleAiProperties } from "./BattleAiProperties";
import { BattleAiPersonalities } from "./BattleAiPersonalities";
export declare namespace BattleAiPropertyPersonalityJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _property: string;
        readonly _personality: string;
        constructor(collectionCache: CollectionCache, values: any);
        get property(): BattleAiProperties.Entry | undefined;
        get personality(): BattleAiPersonalities.Entry | undefined;
    }
}
export default BattleAiPropertyPersonalityJunctions;
