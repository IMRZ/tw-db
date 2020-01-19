import { CollectionCache, CollectionKey } from "../../../common";
import { ModelsSieges } from "./ModelsSieges";
import { BattleEntities } from "./BattleEntities";
import { BattlefieldEnginesAutonomous } from "./BattlefieldEnginesAutonomous";
import { AudioEntityTypes } from "./AudioEntityTypes";
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
        readonly sortOrder: number;
        readonly _audioType: string;
        readonly autoresolverEffectiveness: number;
        constructor(collectionCache: CollectionCache, values: any);
        get model(): ModelsSieges.Entry | undefined;
        get battleEntity(): BattleEntities.Entry | undefined;
        get engine(): BattlefieldEnginesAutonomous.Entry | undefined;
        get audioType(): AudioEntityTypes.Entry | undefined;
    }
}
export default BattlefieldSiegeVehicles;
