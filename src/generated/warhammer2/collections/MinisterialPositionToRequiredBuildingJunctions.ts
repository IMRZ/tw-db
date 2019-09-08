
import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
import { BuildingLevels } from "./BuildingLevels";

export namespace MinisterialPositionToRequiredBuildingJunctions {
  export const KEY = new CollectionKey("ministerial_position_to_required_building_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ministerialPosition: string;
    readonly _requiredBuilding: string;
    readonly localisedRequirementDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ministerialPosition = values["ministerial_position"];
      this._requiredBuilding = values["required_building"];
      this.localisedRequirementDescription = values["localised_requirement_description"];
    }
    
    get ministerialPosition(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._ministerialPosition);
    }
    
    get requiredBuilding(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._requiredBuilding);
    }
  }
}

export default MinisterialPositionToRequiredBuildingJunctions;
