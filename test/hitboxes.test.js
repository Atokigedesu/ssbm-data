import assert from 'assert';
import { validate } from 'jsonschema';
import hitboxes from '../src/hitboxes';

describe('stages.json', () => {
  it('should valid schema', () => {
    // schema
    const schema = {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          Angle: { type: 'number' },
          BaseKnockback: { type: 'number' },
          Char: { type: 'string' },
          Damage: { type: 'number' },
          Effect: { type: 'string' },
          KnockbackGrowth: { type: 'number' },
          Throw: { type: 'boolean' },
          WeightBasedKnockback: { type: 'number' },
        },
        required: [
          'Angle',
          'BaseKnockback',
          'Char',
          'Damage',
          'Effect',
          'KnockbackGrowth',
          'Throw',
          'WeightBasedKnockback',
        ],
      },
    };
    // validate
    const result = validate(hitboxes, schema);
    assert.equal(true, result.valid, JSON.stringify(result.errors));
  });
});
