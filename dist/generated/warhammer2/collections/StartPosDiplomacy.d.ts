import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosFactions } from "./StartPosFactions";
export declare namespace StartPosDiplomacy {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly _faction1: number;
        readonly _faction2: number;
        readonly _stance: any;
        readonly grantsMilitaryAccess: boolean;
        readonly grantsTradeAgreement: boolean;
        readonly relationsModifier: number;
        readonly nonAggressionPact: boolean;
        readonly unique: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly faction1: StartPosFactions.Entry | undefined;
        readonly faction2: StartPosFactions.Entry | undefined;
    }
}
export default StartPosDiplomacy;
