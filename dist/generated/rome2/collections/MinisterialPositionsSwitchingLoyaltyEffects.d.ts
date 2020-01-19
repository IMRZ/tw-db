import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
export declare namespace MinisterialPositionsSwitchingLoyaltyEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _positionFrom: string;
        readonly _positionTo: string;
        readonly loyaltyGained: number;
        constructor(collectionCache: CollectionCache, values: any);
        get positionFrom(): MinisterialPositions.Entry | undefined;
        get positionTo(): MinisterialPositions.Entry | undefined;
    }
}
export default MinisterialPositionsSwitchingLoyaltyEffects;
