import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityCharacterRoleComponents } from "./CaiPersonalityCharacterRoleComponents";
export declare namespace CaiPersonalityCharacterRoleComponentOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _component: string;
        readonly _parent: string;
        constructor(collectionCache: CollectionCache, values: any);
        get component(): CaiPersonalityCharacterRoleComponents.Entry | undefined;
        get parent(): CaiPersonalityCharacterRoleComponents.Entry | undefined;
    }
}
export default CaiPersonalityCharacterRoleComponentOverrides;
