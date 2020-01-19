import { CollectionCache, CollectionKey } from "../../../common";
import { UnitSets } from "./UnitSets";
import { UnitAbilities } from "./UnitAbilities";
export declare namespace UnitSetUnitAbilityJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _unitSet: string;
        readonly _unitAbility: string;
        constructor(collectionCache: CollectionCache, values: any);
        get unitSet(): UnitSets.Entry | undefined;
        get unitAbility(): UnitAbilities.Entry | undefined;
    }
}
export default UnitSetUnitAbilityJunctions;
