import { CollectionCache, CollectionKey } from "../../../common";
import { BattleEntities } from "./BattleEntities";
import { WarscapeAnimated } from "./WarscapeAnimated";
export declare namespace LandUnitArticulatedVehicles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _articulatedEntity: string;
        readonly _ammoCaissonEntity: string;
        readonly _ammoCaissonModel: string;
        readonly ammoCaissonDestroyedModel: string;
        readonly _ammoCaissonDestruction: string;
        readonly articulationNode1Offset: number;
        readonly articulationNode1Radius: number;
        readonly articulationNode2Offset: number;
        readonly articulationNode2Radius: number;
        readonly articulationNode3Offset: number;
        readonly articulationNode3Radius: number;
        readonly articulationMaxAngle: number;
        readonly headOffset: number;
        constructor(collectionCache: CollectionCache, values: any);
        get articulatedEntity(): BattleEntities.Entry | undefined;
        get ammoCaissonEntity(): BattleEntities.Entry | undefined;
        get ammoCaissonModel(): WarscapeAnimated.Entry | undefined;
        get ammoCaissonDestruction(): WarscapeAnimated.Entry | undefined;
    }
}
export default LandUnitArticulatedVehicles;
