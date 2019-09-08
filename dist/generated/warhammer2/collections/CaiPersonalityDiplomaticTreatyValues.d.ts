import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDiplomaticComponents } from "./CaiPersonalityDiplomaticComponents";
import { CaiPersonalityDiplomaticTreatyTypes } from "./CaiPersonalityDiplomaticTreatyTypes";
export declare namespace CaiPersonalityDiplomaticTreatyValues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _componentId: string;
        readonly initialValue: number;
        readonly value1: number;
        readonly turn1: number;
        readonly value2: number;
        readonly turn2: number;
        readonly _treaty: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly componentId: CaiPersonalityDiplomaticComponents.Entry | undefined;
        readonly treaty: CaiPersonalityDiplomaticTreatyTypes.Entry | undefined;
    }
}
export default CaiPersonalityDiplomaticTreatyValues;
