import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldEngines } from "./BattlefieldEngines";
import { BattleEntities } from "./BattleEntities";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
export declare namespace BattlefieldEnginesAutonomous {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _autonomousEngineType: string;
        readonly _engineCrewEntity: string;
        readonly _engineCrewAnims: string;
        readonly numAmmo: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly autonomousEngineType: BattlefieldEngines.Entry | undefined;
        readonly engineCrewEntity: BattleEntities.Entry | undefined;
        readonly engineCrewAnims: BattleAnimationsTable.Entry | undefined;
    }
}
export default BattlefieldEnginesAutonomous;
