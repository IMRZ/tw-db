import { CollectionCache, CollectionKey } from "../../../common";
import { Tristates } from "./Tristates";
import { MinisterialPositions } from "./MinisterialPositions";
export declare namespace CaptiveOptionRequirements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly minLoyalty: number;
        readonly maxLoyalty: number;
        readonly _isSpy: string;
        readonly _hasMinisterialPosition: string;
        readonly _specificMinisterialPosition: string;
        readonly _factionWillDiePostCaptiveTransaction: string;
        constructor(collectionCache: CollectionCache, values: any);
        get isSpy(): Tristates.Entry | undefined;
        get hasMinisterialPosition(): Tristates.Entry | undefined;
        get specificMinisterialPosition(): MinisterialPositions.Entry | undefined;
        get factionWillDiePostCaptiveTransaction(): Tristates.Entry | undefined;
    }
}
export default CaptiveOptionRequirements;
