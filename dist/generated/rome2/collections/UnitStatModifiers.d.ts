import { CollectionCache, CollectionKey } from "../../../common";
import { UiUnitStats } from "./UiUnitStats";
import { UnitStatModifiersHowEnums } from "./UnitStatModifiersHowEnums";
export declare namespace UnitStatModifiers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _stat: string;
        readonly _how: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly stat: UiUnitStats.Entry | undefined;
        readonly how: UnitStatModifiersHowEnums.Entry | undefined;
    }
}
export default UnitStatModifiers;
