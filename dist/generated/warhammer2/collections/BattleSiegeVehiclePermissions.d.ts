import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldSiegeVehicles } from "./BattlefieldSiegeVehicles";
import { Factions } from "./Factions";
export declare namespace BattleSiegeVehiclePermissions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _vehicle: string;
        readonly _faction: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly vehicle: BattlefieldSiegeVehicles.Entry | undefined;
        readonly faction: Factions.Entry | undefined;
    }
}
export default BattleSiegeVehiclePermissions;
