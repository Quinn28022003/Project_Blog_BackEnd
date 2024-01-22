import fs from 'fs';
import path from 'path';

export class ConvertImage {
    async toBase64(filePath: string): Promise<string> {
        try {
            const absolutePath = path.join(__dirname, filePath);
            const img = fs.readFileSync(absolutePath);
            return Buffer.from(img).toString('base64');
        } catch (error) {
            throw new Error(`Error converting image to base64: ${error}`);
        };
    };
};

