import { CollectionCache, CollectionKey } from "../../../common";
import { UnitSpecialAbilities } from "./UnitSpecialAbilities";
import { DynastyUpgradeTypes } from "./DynastyUpgradeTypes";
export declare namespace DynastyUpgrades {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreenName: string;
        readonly cost: number;
        readonly _abilityRecord: string;
        readonly numUses: number;
        readonly _type: string;
        constructor(collectionCache: CollectionCache, values: any);
        get abilityRecord(): UnitSpecialAbilities.Entry | undefined;
        get type(): DynastyUpgradeTypes.Entry | undefined;
    }
}
export default DynastyUpgrades;
