import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { isValidYAML } from './src/validate';

try {
    // read yaml file
    const yamlContents = fs.readFileSync("./waf.yaml", "utf8");
    const release = yaml.load(yamlContents) as any;

    if (!isValidYAML(release)) {
        throw new Error('Invalid YAML spec');
    }

    console.log(release.spec[0].service_name);
} catch (e) {
    console.error(e.message);
}
