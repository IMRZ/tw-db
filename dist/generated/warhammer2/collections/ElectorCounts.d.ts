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
        readonly ministerialKey: MinisterialPositions.Entry | undefined;
        readonly capitalRegion: Regions.Entry | undefined;
        readonly ancillaryReward: Ancillaries.Entry | undefined;
        readonly unitReward: MainUnits.Entry | undefined;
    }
}
export default ElectorCounts;
