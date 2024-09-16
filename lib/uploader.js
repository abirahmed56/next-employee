import { IncomingForm } from "formidable";
import path from "path";
export const parseForm = async (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const form = new IncomingForm({
        uploadDir: path.join(process.cwd(), "public", "uploads"),
        keepExtensions: true,
      });
      await form.parse(req, function (err, fields, files) {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    } catch (err) {
      reject(err);
    }
  });
};
