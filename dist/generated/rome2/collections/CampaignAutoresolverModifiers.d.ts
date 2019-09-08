import { CollectionCache, CollectionKey } from "../../../common";
import { UnitClass } from "./UnitClass";
import { CampaignAutoresolverStatVariables } from "./CampaignAutoresolverStatVariables";
export declare namespace CampaignAutoresolverModifiers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly _class: string;
        readonly _vsClass: string;
        readonly _statVariableId: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly class: UnitClass.Entry | undefined;
        readonly vsClass: UnitClass.Entry | undefined;
        readonly statVariableId: CampaignAutoresolverStatVariables.Entry | undefined;
    }
}
export default CampaignAutoresolverModifiers;
