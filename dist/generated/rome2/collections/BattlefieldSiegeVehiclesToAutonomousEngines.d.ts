import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldSiegeVehicles } from "./BattlefieldSiegeVehicles";
import { BattlefieldEnginesAutonomous } from "./BattlefieldEnginesAutonomous";
export declare namespace BattlefieldSiegeVehiclesToAutonomousEngines {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _vehicle: string;
        readonly _engine: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly vehicle: BattlefieldSiegeVehicles.Entry | undefined;
        readonly engine: BattlefieldEnginesAutonomous.Entry | undefined;
    }
}
export default BattlefieldSiegeVehiclesToAutonomousEngines;
