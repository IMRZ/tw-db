import { CollectionCache, CollectionKey } from "../../../common";
import { UiDiplomacyTreatyComponents } from "./UiDiplomacyTreatyComponents";
import { UiDiplomacyAutomaticParameters } from "./UiDiplomacyAutomaticParameters";
export declare namespace UiDiplomacyTreatyComponentsAutomaticParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _uiDiplomacyTreatyComponent: string;
        readonly _automaticParameter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get uiDiplomacyTreatyComponent(): UiDiplomacyTreatyComponents.Entry | undefined;
        get automaticParameter(): UiDiplomacyAutomaticParameters.Entry | undefined;
    }
}
export default UiDiplomacyTreatyComponentsAutomaticParameters;
