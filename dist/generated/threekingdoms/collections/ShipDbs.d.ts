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
        readonly hitPoints: number;
        constructor(collectionCache: CollectionCache, values: any);
        get spacing(): UnitSpacings.Entry | undefined;
        get entity(): BattleEntities.Entry | undefined;
        get model(): ModelsNaval.Entry | undefined;
    }
}
export default ShipDbs;
