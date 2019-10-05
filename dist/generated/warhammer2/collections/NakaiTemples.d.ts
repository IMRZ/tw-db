import { CollectionCache, CollectionKey } from "../../../common";
import { UiColours } from "./UiColours";
import { CultureSettlementOccupationOptions } from "./CultureSettlementOccupationOptions";
export declare namespace NakaiTemples {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedName: string;
        readonly lore: string;
        readonly image: string;
        readonly _colour: string;
        readonly _cultureSettlementOccupationOption: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly colour: UiColours.Entry | undefined;
        readonly cultureSettlementOccupationOption: CultureSettlementOccupationOptions.Entry | undefined;
    }
}
export default NakaiTemples;
