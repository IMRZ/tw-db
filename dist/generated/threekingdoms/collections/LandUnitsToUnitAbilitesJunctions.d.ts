import { CollectionCache, CollectionKey } from "../../../common";
import { LandUnits } from "./LandUnits";
import { UnitAbilities } from "./UnitAbilities";
export declare namespace LandUnitsToUnitAbilitesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _landUnit: string;
        readonly _ability: string;
        constructor(collectionCache: CollectionCache, values: any);
        get landUnit(): LandUnits.Entry | undefined;
        get ability(): UnitAbilities.Entry | undefined;
    }
}
export default LandUnitsToUnitAbilitesJunctions;
