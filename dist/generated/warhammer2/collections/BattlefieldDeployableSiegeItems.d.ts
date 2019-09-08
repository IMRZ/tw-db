import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldSiegeVehicles } from "./BattlefieldSiegeVehicles";
export declare namespace BattlefieldDeployableSiegeItems {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _battlefieldSiegeVehicle: string;
        readonly level: number;
        readonly type: string;
        readonly siegeEffortCost: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly battlefieldSiegeVehicle: BattlefieldSiegeVehicles.Entry | undefined;
    }
}
export default BattlefieldDeployableSiegeItems;
