
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingUiGroups } from "./BuildingUiGroups";
import { BuildingSuperchains } from "./BuildingSuperchains";

export namespace BuildingUiGroupsToSuperchains {
  export const KEY = new CollectionKey("building_ui_groups_to_superchains");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _buildingUiGroup: string;
    readonly _buildingSuperchain: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._buildingUiGroup = values["building_ui_group"];
      this._buildingSuperchain = values["building_superchain"];
    }
    
    get buildingUiGroup(): BuildingUiGroups.Entry | undefined {
      const collection = <BuildingUiGroups.Entry[]>this.collectionCache.getCollection(BuildingUiGroups.KEY, BuildingUiGroups.Entry);
      return collection.find(entry => entry.key === this._buildingUiGroup);
    }
    
    get buildingSuperchain(): BuildingSuperchains.Entry | undefined {
      const collection = <BuildingSuperchains.Entry[]>this.collectionCache.getCollection(BuildingSuperchains.KEY, BuildingSuperchains.Entry);
      return collection.find(entry => entry.key === this._buildingSuperchain);
    }
  }
}

export default BuildingUiGroupsToSuperchains;
