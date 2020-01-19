import { CollectionCache, CollectionKey } from "../../../common";
import { Mounts } from "./Mounts";
import { LandUnitArticulatedVehicles } from "./LandUnitArticulatedVehicles";
import { BattlefieldEngines } from "./BattlefieldEngines";
import { Animals } from "./Animals";
import { ShipDbs } from "./ShipDbs";
import { BattlePersonalityTypesEnum } from "./BattlePersonalityTypesEnum";
import { Mens } from "./Mens";
export declare namespace ComposedEntities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly numMen: number;
        readonly _mount: string;
        readonly numMounts: number;
        readonly _articulatedVehicle: string;
        readonly _engine: string;
        readonly numEngines: number;
        readonly _animal: string;
        readonly numAnimals: number;
        readonly _ship: string;
        readonly numShips: number;
        readonly areDraughtsMounted: boolean;
        readonly canBeDismounted: boolean;
        readonly _personalityType: string;
        readonly _man: string;
        constructor(collectionCache: CollectionCache, values: any);
        get mount(): Mounts.Entry | undefined;
        get articulatedVehicle(): LandUnitArticulatedVehicles.Entry | undefined;
        get engine(): BattlefieldEngines.Entry | undefined;
        get animal(): Animals.Entry | undefined;
        get ship(): ShipDbs.Entry | undefined;
        get personalityType(): BattlePersonalityTypesEnum.Entry | undefined;
        get man(): Mens.Entry | undefined;
    }
}
export default ComposedEntities;
