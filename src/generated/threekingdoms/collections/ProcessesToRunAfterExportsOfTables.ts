
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ProcessesToRunAfterExportsOfTables {
  export const KEY = new CollectionKey("processes_to_run_after_exports_of_tables");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly tableName: string;
    readonly processPathFromBinaries: string;
    readonly additionalArguments: string;
    readonly passWorkspace: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.tableName = values["table_name"];
      this.processPathFromBinaries = values["process_path_from_binaries"];
      this.additionalArguments = values["additional_arguments"];
      this.passWorkspace = !!values["pass_workspace"];
    }
    
  }
}

export default ProcessesToRunAfterExportsOfTables;
