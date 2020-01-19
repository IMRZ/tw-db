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
        get class(): UnitClass.Entry | undefined;
        get vsClass(): UnitClass.Entry | undefined;
        get statVariableId(): CampaignAutoresolverStatVariables.Entry | undefined;
    }
}
export default CampaignAutoresolverModifiers;
