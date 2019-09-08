import { CollectionCache, CollectionKey } from "../../../common";
import { UnitSpacings } from "./UnitSpacings";
import { BattleEntities } from "./BattleEntities";
import { ModelsNaval } from "./ModelsNaval";
export declare namespace ShipDbs {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _spacing: string;
        readonly _entity: string;
        readonly _model: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly spacing: UnitSpacings.Entry | undefined;
        readonly entity: BattleEntities.Entry | undefined;
        readonly model: ModelsNaval.Entry | undefined;
    }
}
export default ShipDbs;
