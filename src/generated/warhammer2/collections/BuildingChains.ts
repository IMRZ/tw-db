
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingSuperchains } from "./BuildingSuperchains";
import { EncyclopediaBuildingChainGroups } from "./EncyclopediaBuildingChainGroups";
import { AgentSubtypes } from "./AgentSubtypes";

export namespace BuildingChains {
  export const KEY = new CollectionKey("building_chains");

  export class Entry {
    private readonly collectionCache: CollectionCache;

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

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.techCategoryTab = values["tech_category_tab"];
      this.techCategoryPosition = values["tech_category_position"];
      this.chainCategory = values["chain_category"];
      this.chainTooltip = values["chain_tooltip"];
      this.inEncyclopedia = !!values["in_encyclopedia"];
      this._buildingSuperchain = values["building_superchain"];
      this.encyclopediaDescription = values["encyclopedia_description"];
      this._encyclopediaGroup = values["encyclopedia_group"];
      this.encyclopediaIncludeInIndex = !!values["encyclopedia_include_in_index"];
      this.encyclopediaName = values["encyclopedia_name"];
      this.optionalTierIcon = values["optional_tier_icon"];
      this.optionalSortOrder = values["optional_sort_order"];
      this._optionalRequiredHordeCommander = values["optional_required_horde_commander"];
    }
    
    get buildingSuperchain(): BuildingSuperchains.Entry | undefined {
      const collection = <BuildingSuperchains.Entry[]>this.collectionCache.getCollection(BuildingSuperchains.KEY, BuildingSuperchains.Entry);
      return collection.find(entry => entry.key === this._buildingSuperchain);
    }
    
    get encyclopediaGroup(): EncyclopediaBuildingChainGroups.Entry | undefined {
      const collection = <EncyclopediaBuildingChainGroups.Entry[]>this.collectionCache.getCollection(EncyclopediaBuildingChainGroups.KEY, EncyclopediaBuildingChainGroups.Entry);
      return collection.find(entry => entry.groupName === this._encyclopediaGroup);
    }
    
    get optionalRequiredHordeCommander(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._optionalRequiredHordeCommander);
    }
  }
}

export default BuildingChains;
