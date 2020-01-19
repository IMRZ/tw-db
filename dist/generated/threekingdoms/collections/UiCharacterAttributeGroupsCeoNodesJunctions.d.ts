import { CollectionCache, CollectionKey } from "../../../common";
import { UiCharacterAttributesGroups } from "./UiCharacterAttributesGroups";
import { CeoNodes } from "./CeoNodes";
export declare namespace UiCharacterAttributeGroupsCeoNodesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _group: string;
        readonly _ceoNode: string;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): UiCharacterAttributesGroups.Entry | undefined;
        get ceoNode(): CeoNodes.Entry | undefined;
    }
}
export default UiCharacterAttributeGroupsCeoNodesJunctions;
