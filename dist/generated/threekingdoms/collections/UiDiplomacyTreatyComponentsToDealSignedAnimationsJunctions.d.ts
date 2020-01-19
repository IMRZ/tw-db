import { CollectionCache, CollectionKey } from "../../../common";
import { UiDiplomacyTreatyComponents } from "./UiDiplomacyTreatyComponents";
import { UiDiplomacyDealSignedAnimations } from "./UiDiplomacyDealSignedAnimations";
export declare namespace UiDiplomacyTreatyComponentsToDealSignedAnimationsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _uiDiplomacyTreatyComponent: string;
        readonly _uiDiplomacyDealSignedAnimation: string;
        readonly priority: number;
        constructor(collectionCache: CollectionCache, values: any);
        get uiDiplomacyTreatyComponent(): UiDiplomacyTreatyComponents.Entry | undefined;
        get uiDiplomacyDealSignedAnimation(): UiDiplomacyDealSignedAnimations.Entry | undefined;
    }
}
export default UiDiplomacyTreatyComponentsToDealSignedAnimationsJunctions;
