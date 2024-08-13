import { isValidYAML } from '../src/validate';

// Object missing 'spec' property returns false
it('should return false when the object is missing the "spec" property', () => {
    const invalidRelease = {
        kind: 'Release',
        metadata: {
            labels: {
                product_suite: 'SuiteA'
            }
        }
    };
    expect(isValidYAML(invalidRelease)).toBe(false);
});
