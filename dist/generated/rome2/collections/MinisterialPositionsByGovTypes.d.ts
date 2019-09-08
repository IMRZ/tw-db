import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { MinisterialPositions } from "./MinisterialPositions";
import { GovernmentTypes } from "./GovernmentTypes";
import { Genders } from "./Genders";
export declare namespace MinisterialPositionsByGovTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly _ministerKey: string;
        readonly _governmentType: string;
        readonly _gender: string;
        readonly _string: any;
        readonly loyaltyGained: number;
        readonly loyaltyOnLoss: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly faction: Factions.Entry | undefined;
        readonly ministerKey: MinisterialPositions.Entry | undefined;
        readonly governmentType: GovernmentTypes.Entry | undefined;
        readonly gender: Genders.Entry | undefined;
    }
}
export default MinisterialPositionsByGovTypes;
