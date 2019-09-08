
import * as fs from "fs-extra";
import * as path from "path";
import * as xmlParser from "fast-xml-parser";

import { generateDb } from "./generate-db";
import { generateCollectionsIndex } from "./generate-collections-index";
import { emitIndex } from "./generate-index";

import { Table } from "./util/Table";
import { Relationship } from "./util/Relationship";
import { Context } from "./util/Context";

const DB_SCHEMA_PREFIX = "TWaD_";

interface SchemaFromFile {
  name: string;
  json: any;
}

export function generate(pathToDbFolder: string, game: string) {
  Context.tables = [];
  Context.relationships = [];

  const schemas: SchemaFromFile[] = fs.readdirSync(pathToDbFolder)
    .filter(fileName => fileName.startsWith(DB_SCHEMA_PREFIX))
    .map(fileName => {
      const [/* fullMatch */, schemaName] = fileName.match(/TWaD_(.*).xml/i);
      const filePath = path.resolve(pathToDbFolder, fileName);
      const file = fs.readFileSync(filePath, "utf8");
      const data = xmlParser.parse(file);
      return {
        name: schemaName,
        json: data
      };
    });

  try {
    const tableSchemas = schemas.filter((schema) => schema.json.root && schema.json.root.field);
    const relationshipSchema = schemas.find((schema) => schema.name === "relationships");

    // context
    Relationship.fromJson(relationshipSchema.json)
      .forEach((relationship) => Context.relationships.push(relationship));

    const tables = Table.fromJson(tableSchemas);
    tables.forEach((table) => Context.tables.push(table));

    // ouput
    tables.forEach((table) => {
      fs.outputFileSync(path.resolve(__dirname, `../src/generated/${game}/collections/${table.namespace}.ts`), table.emitCollection());
    });

    fs.outputFileSync(path.resolve(__dirname, `../src/generated/${game}/Database.ts`), generateDb(tables));
    fs.outputFileSync(path.resolve(__dirname, `../src/generated/${game}/index.ts`), emitIndex());
    fs.outputFileSync(path.resolve(__dirname, `../src/generated/${game}/collections/index.ts`), generateCollectionsIndex(tables));
  } catch (error) {
    console.log(error);
  }
}
