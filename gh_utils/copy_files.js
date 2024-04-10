import { copyFileSync } from "fs";

const nojekyllSourcePath = "./gh_utils/.nojekyll";
const nojekyllDestinationPath = "./docs/.nojekyll";
const CNAMESourcePath = "./gh_utils/CNAME";
const CNAMEDestinationPath = "./docs/CNAME";

try {
  copyFileSync(nojekyllSourcePath, nojekyllDestinationPath);
  copyFileSync(CNAMESourcePath, CNAMEDestinationPath);
  console.log("Files copied successfully!");
} catch (err) {
  console.error("Error copying file:", err);
}
