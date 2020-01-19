import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterAttributeSets } from "./CharacterAttributeSets";
import { CharacterAttributeTypes } from "./CharacterAttributeTypes";
export declare namespace CharacterAttributes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _setName: string;
        readonly _attributeType: string;
        readonly baseValue: number;
        readonly minRange: number;
        readonly maxRange: number;
        constructor(collectionCache: CollectionCache, values: any);
        get setName(): CharacterAttributeSets.Entry | undefined;
        get attributeType(): CharacterAttributeTypes.Entry | undefined;
    }
}
export default CharacterAttributes;
