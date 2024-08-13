import { release, service } from './spec';

/**
 * Checks if the given object is a valid release.
 *
 * @param {any} obj - The object to be validated.
 * @return {boolean} Returns true if the object is a valid release, otherwise false.
 */
export const isValidYAML = (obj: any): obj is release => {
    return 'spec' in obj && Array.isArray(obj.spec) &&
    obj.spec.every((s: service) =>
        'service_name' in s && 'fab' in s
    );
}
