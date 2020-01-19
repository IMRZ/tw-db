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
        get technology(): Technologies.Entry | undefined;
        get unit(): MainUnits.Entry | undefined;
        get targetUnit(): MainUnits.Entry | undefined;
    }
}
export default TechnologyUnitUpgrades;
