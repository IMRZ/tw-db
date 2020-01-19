import { CollectionCache, CollectionKey } from "../../../common";
import { Ceos } from "./Ceos";
import { BattleAiProperties } from "./BattleAiProperties";
export declare namespace BattleAiPropertyCeoJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ceo: string;
        readonly _property: string;
        constructor(collectionCache: CollectionCache, values: any);
        get ceo(): Ceos.Entry | undefined;
        get property(): BattleAiProperties.Entry | undefined;
    }
}
export default BattleAiPropertyCeoJunctions;
