import { CollectionCache, CollectionKey } from "../../../common";
import { GroundTypes } from "./GroundTypes";
import { UnitCategory } from "./UnitCategory";
export declare namespace UnitGroundTypeMovementModifiers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _groundType: string;
        readonly _category: string;
        readonly speedModifier: number;
        constructor(collectionCache: CollectionCache, values: any);
        get groundType(): GroundTypes.Entry | undefined;
        get category(): UnitCategory.Entry | undefined;
    }
}
export default UnitGroundTypeMovementModifiers;
