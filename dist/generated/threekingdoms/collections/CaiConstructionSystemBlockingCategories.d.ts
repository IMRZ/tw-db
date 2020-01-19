import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiConstructionSystemBlockingCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly nonBlockingBonus: number;
        readonly blockingPenalty: number;
        readonly numberOfTurnsBeforeEnablingConversion: number;
        readonly numberOfTurnsBeforeEnablingDemolition: number;
        readonly absenceOfNonBlockingBuildingIsAProblem: boolean;
        readonly shouldDisableRecruitmentWhenBlocking: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiConstructionSystemBlockingCategories;
