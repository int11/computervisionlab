import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export function getYamlData<T>(filename: string): T {
    const filePath = path.join(process.cwd(), 'content', filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return yaml.load(fileContents) as T;
}
