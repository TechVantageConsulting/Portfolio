import { existsSync, rmSync } from "fs";

const docsPath = "./docs";

if (existsSync(docsPath)) {
  rmSync(docsPath, { recursive: true });
  console.log(`Folder 'docs' removed successfully.`);
} else {
    console.log("Folder 'docs' doesn't exist.");
}
