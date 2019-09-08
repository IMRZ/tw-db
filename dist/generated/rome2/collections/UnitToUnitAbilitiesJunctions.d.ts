import { CollectionCache, CollectionKey } from "../../../common";
import { Units } from "./Units";
import { UnitAbilities } from "./UnitAbilities";
export declare namespace UnitToUnitAbilitiesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unitName: string;
        readonly _ability: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly unitName: Units.Entry | undefined;
        readonly ability: UnitAbilities.Entry | undefined;
    }
}
export default UnitToUnitAbilitiesJunctions;
