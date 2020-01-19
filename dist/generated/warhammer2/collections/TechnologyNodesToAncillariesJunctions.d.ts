import { CollectionCache, CollectionKey } from "../../../common";
import { TechnologyNodes } from "./TechnologyNodes";
import { Ancillaries } from "./Ancillaries";
export declare namespace TechnologyNodesToAncillariesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _technologyNode: string;
        readonly _ancillary: string;
        constructor(collectionCache: CollectionCache, values: any);
        get technologyNode(): TechnologyNodes.Entry | undefined;
        get ancillary(): Ancillaries.Entry | undefined;
    }
}
export default TechnologyNodesToAncillariesJunctions;
