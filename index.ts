import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { isValidYAML } from './src/validate';
import { validateYAML } from './src/zvalidate';

// try {
//     // read yaml file
//     const yamlContents = fs.readFileSync("./waf.yaml", "utf8");
//     const release = yaml.load(yamlContents) as any;

//     if (!isValidYAML(release)) {
//         throw new Error('Invalid YAML spec');
//     }

//     console.log(release.spec[0].service_name);
// } catch (e) {
//     console.error(e.message);
// }

try {
    const yamlContent = yaml.load(
        fs.readFileSync("./waf.yaml", "utf8")
    )
    validateYAML(yamlContent);
} catch (e) {
    console.error(e.message);
}