import { CollectionCache, CollectionKey } from "../../../common";
import { TechnologyNodes } from "./TechnologyNodes";
export declare namespace TechnologyNodeLinks {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _parentKey: string;
        readonly _childKey: string;
        readonly initialDescentTiers: number;
        readonly parentLinkPosition: number;
        readonly childLinkPosition: number;
        readonly encyclopediaParentLinkPosition: number;
        readonly encyclopediaChildLinkPosition: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly parentKey: TechnologyNodes.Entry | undefined;
        readonly childKey: TechnologyNodes.Entry | undefined;
    }
}
export default TechnologyNodeLinks;
