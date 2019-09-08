import { CollectionCache, CollectionKey } from "../../../common";
import { Technologies } from "./Technologies";
import { MainUnits } from "./MainUnits";
export declare namespace TechnologyUnitUpgrades {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _technology: string;
        readonly _unit: string;
        readonly _targetUnit: string;
        readonly cost: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly technology: Technologies.Entry | undefined;
        readonly unit: MainUnits.Entry | undefined;
        readonly targetUnit: MainUnits.Entry | undefined;
    }
}
export default TechnologyUnitUpgrades;
