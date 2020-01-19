import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
import { Regions } from "./Regions";
import { Ancillaries } from "./Ancillaries";
import { MainUnits } from "./MainUnits";
export declare namespace ElectorCounts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ministerialKey: string;
        readonly _capitalRegion: string;
        readonly _ancillaryReward: string;
        readonly _unitReward: string;
        readonly mapPosX: number;
        readonly mapPosY: number;
        constructor(collectionCache: CollectionCache, values: any);
        get ministerialKey(): MinisterialPositions.Entry | undefined;
        get capitalRegion(): Regions.Entry | undefined;
        get ancillaryReward(): Ancillaries.Entry | undefined;
        get unitReward(): MainUnits.Entry | undefined;
    }
}
export default ElectorCounts;
