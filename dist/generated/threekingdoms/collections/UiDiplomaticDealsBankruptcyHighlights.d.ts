import { CollectionCache, CollectionKey } from "../../../common";
import { UiDiplomacyTreatyComponents } from "./UiDiplomacyTreatyComponents";
import { UiDiplomacyParticipants } from "./UiDiplomacyParticipants";
export declare namespace UiDiplomaticDealsBankruptcyHighlights {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly _highlightDirection: string;
        constructor(collectionCache: CollectionCache, values: any);
        get key(): UiDiplomacyTreatyComponents.Entry | undefined;
        get highlightDirection(): UiDiplomacyParticipants.Entry | undefined;
    }
}
export default UiDiplomaticDealsBankruptcyHighlights;
