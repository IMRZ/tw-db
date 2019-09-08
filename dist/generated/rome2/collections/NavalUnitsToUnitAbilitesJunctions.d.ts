import { CollectionCache, CollectionKey } from "../../../common";
import { NavalUnits } from "./NavalUnits";
import { UnitAbilities } from "./UnitAbilities";
export declare namespace NavalUnitsToUnitAbilitesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _navalUnit: string;
        readonly _ability: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly navalUnit: NavalUnits.Entry | undefined;
        readonly ability: UnitAbilities.Entry | undefined;
    }
}
export default NavalUnitsToUnitAbilitesJunctions;
