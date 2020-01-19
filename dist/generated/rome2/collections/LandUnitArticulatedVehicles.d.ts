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
        get articulatedEntity(): BattleEntities.Entry | undefined;
        get ammoCaissonEntity(): BattleEntities.Entry | undefined;
        get ammoCaissonModel(): WarscapeAnimated.Entry | undefined;
        get ammoCaissonDestroyedModel(): WarscapeRigid.Entry | undefined;
        get ammoCaissonDestruction(): WarscapeAnimated.Entry | undefined;
    }
}
export default LandUnitArticulatedVehicles;
