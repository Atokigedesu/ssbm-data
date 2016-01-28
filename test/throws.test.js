import assert from 'assert';
import { validate } from 'jsonschema';
import throws from '../src/throws';

describe('throws.json', () => {
  it('should valid schema', () => {
    // schema
    const schema = {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          angle: { type: 'number' },
          base_knockback: { type: 'number' },
          character_id: { type: 'string' },
          damage: { type: 'number' },
          effect: { type: 'string' },
          id: { type: 'number' },
          knockback_growth: { type: 'number' },
          move: { type: 'string' },
          weight_dependent_set_knockback: { type: 'number' },
        },
        required: [
          'angle',
          'base_knockback',
          'character_id',
          'damage',
          'effect',
          'id',
          'knockback_growth',
          'move',
          'weight_dependent_set_knockback',
        ],
      },
    };
    // validate
    const result = validate(throws, schema);
    assert.equal(true, result.valid, JSON.stringify(result.errors));
  });
});
