import { CollectionCache, CollectionKey } from "../../../common";
import { TexcExpansions } from "./TexcExpansions";
export declare namespace TexcExpansionDependencies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _expansion: string;
        readonly _parent: string;
        constructor(collectionCache: CollectionCache, values: any);
        get expansion(): TexcExpansions.Entry | undefined;
        get parent(): TexcExpansions.Entry | undefined;
    }
}
export default TexcExpansionDependencies;
