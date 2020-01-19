import { CollectionCache, CollectionKey } from "../../../common";
import { MissionIssuers } from "./MissionIssuers";
import { MapPinIconTypes } from "./MapPinIconTypes";
export declare namespace MissionIssuerToMapPinIconJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _missionIssuer: string;
        readonly _mapPinIcon: string;
        constructor(collectionCache: CollectionCache, values: any);
        get missionIssuer(): MissionIssuers.Entry | undefined;
        get mapPinIcon(): MapPinIconTypes.Entry | undefined;
    }
}
export default MissionIssuerToMapPinIconJunctions;
