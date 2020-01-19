import { CollectionCache, CollectionKey } from "../../../common";
import { SlotTemplates } from "./SlotTemplates";
import { BuildingSuperchains } from "./BuildingSuperchains";
export declare namespace SlotTemplateToBuildingSuperchainJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _slotTemplate: string;
        readonly _buildingSuperchain: string;
        constructor(collectionCache: CollectionCache, values: any);
        get slotTemplate(): SlotTemplates.Entry | undefined;
        get buildingSuperchain(): BuildingSuperchains.Entry | undefined;
    }
}
export default SlotTemplateToBuildingSuperchainJunctions;
