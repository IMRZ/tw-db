import { CollectionCache, CollectionKey } from "../../../common";
import { Variants } from "./Variants";
export declare namespace AgentUniforms {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly uniformName: string;
        readonly _filename: string;
        readonly _battleFilename: string;
        readonly _campaignPortholeFilename: string;
        readonly campaignPoliticianFilename: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly filename: Variants.Entry | undefined;
        readonly battleFilename: Variants.Entry | undefined;
        readonly campaignPortholeFilename: Variants.Entry | undefined;
    }
}
export default AgentUniforms;
