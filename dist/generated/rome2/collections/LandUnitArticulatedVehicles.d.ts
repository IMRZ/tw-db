import { CollectionCache, CollectionKey } from "../../../common";
import { BattleEntities } from "./BattleEntities";
import { WarscapeAnimated } from "./WarscapeAnimated";
import { WarscapeRigid } from "./WarscapeRigid";
export declare namespace LandUnitArticulatedVehicles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _articulatedEntity: string;
        readonly _ammoCaissonEntity: string;
        readonly _ammoCaissonModel: string;
        readonly _ammoCaissonDestroyedModel: string;
        readonly _ammoCaissonDestruction: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly articulatedEntity: BattleEntities.Entry | undefined;
        readonly ammoCaissonEntity: BattleEntities.Entry | undefined;
        readonly ammoCaissonModel: WarscapeAnimated.Entry | undefined;
        readonly ammoCaissonDestroyedModel: WarscapeRigid.Entry | undefined;
        readonly ammoCaissonDestruction: WarscapeAnimated.Entry | undefined;
    }
}
export default LandUnitArticulatedVehicles;
