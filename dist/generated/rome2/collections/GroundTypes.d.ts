import { CollectionCache, CollectionKey } from "../../../common";
import { Cursors } from "./Cursors";
import { UnitAttributes } from "./UnitAttributes";
export declare namespace GroundTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly type: string;
        readonly enumValue: number;
        readonly tooltip: string;
        readonly _standardCursor: string;
        readonly _selectionCursor: string;
        readonly _penaltyImmuneAttribute: string;
        constructor(collectionCache: CollectionCache, values: any);
        get standardCursor(): Cursors.Entry | undefined;
        get selectionCursor(): Cursors.Entry | undefined;
        get penaltyImmuneAttribute(): UnitAttributes.Entry | undefined;
    }
}
export default GroundTypes;
