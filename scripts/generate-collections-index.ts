import { Table } from "./util/Table";

export function generateCollectionsIndex(tables: Table[]) {
  return tables.map((table) => {
    return `export { ${table.namespace} } from "./${table.namespace}";`
  }).join("\n").concat("\n");
}
