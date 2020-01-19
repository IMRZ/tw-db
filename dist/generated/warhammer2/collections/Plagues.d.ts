import { CollectionCache, CollectionKey } from "../../../common";
import { PlagueTypes } from "./PlagueTypes";
export declare namespace Plagues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly name: string;
        readonly grade: number;
        readonly minimumSqualor: number;
        readonly infectivity: number;
        readonly lifetime: number;
        readonly _plagueType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get plagueType(): PlagueTypes.Entry | undefined;
    }
}
export default Plagues;
