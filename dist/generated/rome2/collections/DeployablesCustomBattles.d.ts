import { CollectionCache, CollectionKey } from "../../../common";
import { Deployables } from "./Deployables";
export declare namespace DeployablesCustomBattles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _deployable: string;
        readonly cap: number;
        readonly probability: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly deployable: Deployables.Entry | undefined;
    }
}
export default DeployablesCustomBattles;
