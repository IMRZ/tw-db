import { CollectionCache, CollectionKey } from "../../../common";
import { Battles } from "./Battles";
import { BattleSkyTypes } from "./BattleSkyTypes";
export declare namespace BattlesToBattleSkyTypesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _battleKey: string;
        readonly _battleSkyTypeKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get battleKey(): Battles.Entry | undefined;
        get battleSkyTypeKey(): BattleSkyTypes.Entry | undefined;
    }
}
export default BattlesToBattleSkyTypesJunctions;
