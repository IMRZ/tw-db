
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapSettlements } from "./CampaignMapSettlements";
import { StartPosRegions } from "./StartPosRegions";
import { BuildingLevels } from "./BuildingLevels";

export namespace StartPosSettlements {
  export const KEY = new CollectionKey("start_pos_settlements");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _settlementId: string;
    readonly _region: number;
    readonly _building1: string;
    readonly _building2: string;
    readonly _building3: string;
    readonly _building4: string;
    readonly _building5: string;
    readonly wealth: number;
    readonly onscreenName: string;
    readonly id: number;
    readonly _primaryBuilding: string;
    readonly _portBuilding: string;
    readonly startposSlavePoints: number;
    readonly unique: boolean;
    readonly razed: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._settlementId = values["settlement_id"];
      this._region = values["region"];
      this._building1 = values["building1"];
      this._building2 = values["building2"];
      this._building3 = values["building3"];
      this._building4 = values["building4"];
      this._building5 = values["building5"];
      this.wealth = values["wealth"];
      this.onscreenName = values["onscreen_name"];
      this.id = values["id"];
      this._primaryBuilding = values["primary_building"];
      this._portBuilding = values["port_building"];
      this.startposSlavePoints = values["startpos_slave_points"];
      this.unique = !!values["unique"];
      this.razed = !!values["razed"];
    }
    
    get settlementId(): CampaignMapSettlements.Entry | undefined {
      const collection = <CampaignMapSettlements.Entry[]>this.collectionCache.getCollection(CampaignMapSettlements.KEY, CampaignMapSettlements.Entry);
      return collection.find(entry => entry.settlementId === this._settlementId);
    }
    
    get region(): StartPosRegions.Entry | undefined {
      const collection = <StartPosRegions.Entry[]>this.collectionCache.getCollection(StartPosRegions.KEY, StartPosRegions.Entry);
      return collection.find(entry => entry.id === this._region);
    }
    
    get building1(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._building1);
    }
    
    get building2(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._building2);
    }
    
    get building3(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._building3);
    }
    
    get building4(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._building4);
    }
    
    get building5(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._building5);
    }
    
    get primaryBuilding(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._primaryBuilding);
    }
    
    get portBuilding(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._portBuilding);
    }
  }
}

export default StartPosSettlements;
