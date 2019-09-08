import { CollectionCache, CollectionKey } from "../../../common";
import { ModelsSieges } from "./ModelsSieges";
import { BattleEntities } from "./BattleEntities";
import { BattlefieldEnginesAutonomous } from "./BattlefieldEnginesAutonomous";
export declare namespace BattlefieldSiegeVehicles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _model: string;
        readonly hitPoints: number;
        readonly _battleEntity: string;
        readonly gunType: string;
        readonly dockingClearance: number;
        readonly _engine: string;
        readonly onscreenName: string;
        readonly description: string;
        readonly imagePath: string;
        readonly recruitmentCap: number;
        readonly uses8MWall: boolean;
        readonly uses15MWall: boolean;
        readonly cost: number;
        readonly categoryImagePath: string;
        readonly specialEditionMask: number;
        readonly ignitionThreshold: number;
        readonly attackDamage: number;
        readonly selectionPriority: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly model: ModelsSieges.Entry | undefined;
        readonly battleEntity: BattleEntities.Entry | undefined;
        readonly engine: BattlefieldEnginesAutonomous.Entry | undefined;
    }
}
export default BattlefieldSiegeVehicles;
