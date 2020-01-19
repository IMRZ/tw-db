import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDiplomaticComponents } from "./CaiPersonalityDiplomaticComponents";
export declare namespace CaiPersonalityDiplomaticTreatyValues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _componentId: string;
        readonly defensiveAlliance: number;
        readonly tradeAgreement: number;
        readonly militaryAlliance: number;
        readonly nonAggressionPact: number;
        readonly vassalageMaster: number;
        readonly vassalageVassal: number;
        readonly clientStateProtector: number;
        readonly clientStateClient: number;
        readonly war: number;
        readonly militaryAccess: number;
        constructor(collectionCache: CollectionCache, values: any);
        get componentId(): CaiPersonalityDiplomaticComponents.Entry | undefined;
    }
}
export default CaiPersonalityDiplomaticTreatyValues;
