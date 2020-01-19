
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { CampaignSiegeEscalationLevels } from "./CampaignSiegeEscalationLevels";

export namespace SiegeObstacles {
  export const KEY = new CollectionKey("siege_obstacles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _buildingLevel: string;
    readonly _siegeEscalationLevel: number;
    readonly numObstacles: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._buildingLevel = values["building_level"];
      this._siegeEscalationLevel = values["siege_escalation_level"];
      this.numObstacles = values["num_obstacles"];
    }
    
    get buildingLevel(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevel);
    }
    
    get siegeEscalationLevel(): CampaignSiegeEscalationLevels.Entry | undefined {
      const collection = <CampaignSiegeEscalationLevels.Entry[]>this.collectionCache.getCollection(CampaignSiegeEscalationLevels.KEY, CampaignSiegeEscalationLevels.Entry);
      return collection.find(entry => entry.level === this._siegeEscalationLevel);
    }
  }
}

export default SiegeObstacles;
