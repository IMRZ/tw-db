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
        readonly articulatedEntity: BattleEntities.Entry | undefined;
        readonly ammoCaissonEntity: BattleEntities.Entry | undefined;
        readonly ammoCaissonModel: WarscapeAnimated.Entry | undefined;
        readonly ammoCaissonDestruction: WarscapeAnimated.Entry | undefined;
    }
}
export default LandUnitArticulatedVehicles;
