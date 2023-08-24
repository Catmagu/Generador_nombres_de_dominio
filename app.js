const pronombres = ["my", "our", "their"];
const adjetivos = ["super", "awesome", "best"];
const sustantivos = ["website", "domain", "place"];
const domainHacks = ["site", "hub", "now"];

const todasLasCombinaciones = [];

for (const pronombre of pronombres) {
  for (const adjetivo of adjetivos) {
    for (const sustantivo of sustantivos) {
      todasLasCombinaciones.push(`${pronombre}${adjetivo}${sustantivo}.com`);

      for (const hack of domainHacks) {
        todasLasCombinaciones.push(
          `${pronombre}${adjetivo}${sustantivo}.${hack}`
        );
      }
    }
  }
}

console.log(todasLasCombinaciones);
