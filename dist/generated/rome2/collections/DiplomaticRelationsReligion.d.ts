import { CollectionCache, CollectionKey } from "../../../common";
import { Religions } from "./Religions";
export declare namespace DiplomaticRelationsReligion {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _religionA: string;
        readonly _religionB: any;
        readonly relationsModifier: number;
        readonly religiousUnhappinessModifier: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly religionA: Religions.Entry | undefined;
    }
}
export default DiplomaticRelationsReligion;
