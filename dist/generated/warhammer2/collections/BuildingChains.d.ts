import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingSuperchains } from "./BuildingSuperchains";
import { EncyclopediaBuildingChainGroups } from "./EncyclopediaBuildingChainGroups";
import { AgentSubtypes } from "./AgentSubtypes";
export declare namespace BuildingChains {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly techCategoryTab: string;
        readonly techCategoryPosition: number;
        readonly chainCategory: string;
        readonly chainTooltip: string;
        readonly inEncyclopedia: boolean;
        readonly _buildingSuperchain: string;
        readonly encyclopediaDescription: string;
        readonly _encyclopediaGroup: string;
        readonly encyclopediaIncludeInIndex: boolean;
        readonly encyclopediaName: string;
        readonly optionalTierIcon: string;
        readonly optionalSortOrder: number;
        readonly _optionalRequiredHordeCommander: string;
        constructor(collectionCache: CollectionCache, values: any);
        get buildingSuperchain(): BuildingSuperchains.Entry | undefined;
        get encyclopediaGroup(): EncyclopediaBuildingChainGroups.Entry | undefined;
        get optionalRequiredHordeCommander(): AgentSubtypes.Entry | undefined;
    }
}
export default BuildingChains;
