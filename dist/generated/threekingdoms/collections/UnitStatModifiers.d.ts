import { CollectionCache, CollectionKey } from "../../../common";
import { ModifiableUnitStats } from "./ModifiableUnitStats";
import { UnitStatModifiersHowEnums } from "./UnitStatModifiersHowEnums";
export declare namespace UnitStatModifiers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _stat: string;
        readonly _how: string;
        constructor(collectionCache: CollectionCache, values: any);
        get stat(): ModifiableUnitStats.Entry | undefined;
        get how(): UnitStatModifiersHowEnums.Entry | undefined;
    }
}
export default UnitStatModifiers;
