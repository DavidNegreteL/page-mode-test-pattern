const { execSync } = require("child_process");
const path = require("path");

// Obtén los archivos modificados en el staging area
const modifiedFiles = execSync("git diff --cached --name-only")
  .toString()
  .split("\n")
  .filter(Boolean);

// Mapea los archivos modificados a los archivos de prueba correspondientes
const testFiles = modifiedFiles
  .filter((file) => file.endsWith(".js")) // Filtra solo archivos JavaScript
  .map((file) => {
    const fileName = path.basename(file, ".js");
    return `features/${fileName}.feature`; // Asume que los archivos de prueba tienen el mismo nombre
  });

// Ejecuta las pruebas correspondientes
if (testFiles.length > 0) {
  execSync(
    `npx cucumber-js ${testFiles.join(
      " "
    )} --world-parameters '{\"browser\": \"chrome:headless\"}'`,
    { stdio: "inherit" }
  );
} else {
  console.log("No hay pruebas relacionadas con los archivos modificados.");
}
