import { CollectionCache, CollectionKey } from "../../../common";
import { TExcUnrestCauses } from "./TExcUnrestCauses";
import { TExcUnrestDemands } from "./TExcUnrestDemands";
export declare namespace UnrestCauseToDemands {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _cause: string;
        readonly levelOfUnrest: string;
        readonly _demand: string;
        constructor(collectionCache: CollectionCache, values: any);
        get cause(): TExcUnrestCauses.Entry | undefined;
        get demand(): TExcUnrestDemands.Entry | undefined;
    }
}
export default UnrestCauseToDemands;
