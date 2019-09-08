import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingSuperchains } from "./BuildingSuperchains";
import { EncyclopediaBuildingChainGroups } from "./EncyclopediaBuildingChainGroups";
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
        constructor(collectionCache: CollectionCache, values: any);
        readonly buildingSuperchain: BuildingSuperchains.Entry | undefined;
        readonly encyclopediaGroup: EncyclopediaBuildingChainGroups.Entry | undefined;
    }
}
export default BuildingChains;
