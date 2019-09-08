import { CollectionCache, CollectionKey } from "../../../common";
import { UnitSpecialAbilities } from "./UnitSpecialAbilities";
export declare namespace ArmySpecialAbilities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly armySpecialAbility: string;
        readonly _unitSpecialAbility: string;
        readonly uniqueId: number;
        readonly enablesSiegeAssault: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly unitSpecialAbility: UnitSpecialAbilities.Entry | undefined;
    }
}
export default ArmySpecialAbilities;
