import { CollectionCache, CollectionKey } from "../../../common";
import { ModelsSieges } from "./ModelsSieges";
import { BattleEntities } from "./BattleEntities";
import { BattlefieldEnginesAutonomous } from "./BattlefieldEnginesAutonomous";
import { AudioEntityTypes } from "./AudioEntityTypes";
import { UiSiegeItemDetails } from "./UiSiegeItemDetails";
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
        readonly uses8MWall: boolean;
        readonly uses15MWall: boolean;
        readonly specialEditionMask: number;
        readonly ignitionThreshold: number;
        readonly attackDamage: number;
        readonly sortOrder: number;
        readonly _audioType: string;
        readonly autoresolverEffectiveness: number;
        readonly _uiSiegeItemDetails: string;
        constructor(collectionCache: CollectionCache, values: any);
        get model(): ModelsSieges.Entry | undefined;
        get battleEntity(): BattleEntities.Entry | undefined;
        get engine(): BattlefieldEnginesAutonomous.Entry | undefined;
        get audioType(): AudioEntityTypes.Entry | undefined;
        get uiSiegeItemDetails(): UiSiegeItemDetails.Entry | undefined;
    }
}
export default BattlefieldSiegeVehicles;
