import { promises as fs } from "fs";
import { NextResponse } from "next/server"
import path from "path"

async function getHeaderData() {
    try {
        // Путь к файлу headerMenu.json
        const filePath =  path.join(process.cwd(), "src", "entities", "data", "headerMenu.json");

        // Чтение файла
        const fileContents = await fs.readFile(filePath, "utf-8");
        const data = JSON.parse(fileContents);
        return data;

    } catch(error) {
        throw new Error(`Error reading headerMenu.json: ${error}`)
    }
}

export const GET = async () => {
    try {
        const data = await getHeaderData()
        return NextResponse.json(data);
    } catch(error) {
        return NextResponse.json({error})
    }
}
