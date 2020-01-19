import { CollectionCache, CollectionKey } from "../../../common";
import { Deployables } from "./Deployables";
export declare namespace DeployablesAbilities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly abilityKey: string;
        readonly _deployable: string;
        readonly uniqueId: number;
        readonly numUses: number;
        readonly rechargeTime: number;
        readonly windUpTime: number;
        readonly dragGround: boolean;
        readonly clickGround: boolean;
        readonly interceptDistance: number;
        constructor(collectionCache: CollectionCache, values: any);
        get deployable(): Deployables.Entry | undefined;
    }
}
export default DeployablesAbilities;
