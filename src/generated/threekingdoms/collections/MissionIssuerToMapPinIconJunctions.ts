
import { CollectionCache, CollectionKey } from "../../../common";
import { MissionIssuers } from "./MissionIssuers";
import { MapPinIconTypes } from "./MapPinIconTypes";

export namespace MissionIssuerToMapPinIconJunctions {
  export const KEY = new CollectionKey("mission_issuer_to_map_pin_icon_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _missionIssuer: string;
    readonly _mapPinIcon: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._missionIssuer = values["mission_issuer"];
      this._mapPinIcon = values["map_pin_icon"];
    }
    
    get missionIssuer(): MissionIssuers.Entry | undefined {
      const collection = <MissionIssuers.Entry[]>this.collectionCache.getCollection(MissionIssuers.KEY, MissionIssuers.Entry);
      return collection.find(entry => entry.issuerKey === this._missionIssuer);
    }
    
    get mapPinIcon(): MapPinIconTypes.Entry | undefined {
      const collection = <MapPinIconTypes.Entry[]>this.collectionCache.getCollection(MapPinIconTypes.KEY, MapPinIconTypes.Entry);
      return collection.find(entry => entry.key === this._mapPinIcon);
    }
  }
}

export default MissionIssuerToMapPinIconJunctions;
