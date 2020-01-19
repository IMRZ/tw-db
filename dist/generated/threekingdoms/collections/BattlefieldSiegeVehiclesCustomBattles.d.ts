import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldSiegeVehicles } from "./BattlefieldSiegeVehicles";
export declare namespace BattlefieldSiegeVehiclesCustomBattles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _vehicle: string;
        readonly cap: number;
        readonly probability: number;
        constructor(collectionCache: CollectionCache, values: any);
        get vehicle(): BattlefieldSiegeVehicles.Entry | undefined;
    }
}
export default BattlefieldSiegeVehiclesCustomBattles;
