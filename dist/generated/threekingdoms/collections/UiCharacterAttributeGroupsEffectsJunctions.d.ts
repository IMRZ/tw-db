import { CollectionCache, CollectionKey } from "../../../common";
import { UiCharacterAttributesGroups } from "./UiCharacterAttributesGroups";
import { Effects } from "./Effects";
export declare namespace UiCharacterAttributeGroupsEffectsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _group: string;
        readonly _effect: string;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): UiCharacterAttributesGroups.Entry | undefined;
        get effect(): Effects.Entry | undefined;
    }
}
export default UiCharacterAttributeGroupsEffectsJunctions;
