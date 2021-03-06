import assert from 'assert';
import { validate } from 'jsonschema';
import hitboxes from '../src/hitboxes';

describe('hitboxes.json', () => {
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
          hit_air: { type: 'boolean' },
          hit_ground: { type: 'boolean' },
          id: { type: 'number' },
          knockback_growth: { type: 'number' },
          move: { type: 'string' },
          shield_damage: { type: 'number' },
          weight_dependent_set_knockback: { type: 'number' },
        },
        required: [
          'angle',
          'base_knockback',
          'character_id',
          'damage',
          'effect',
          'hit_air',
          'hit_ground',
          'id',
          'knockback_growth',
          'move',
          'shield_damage',
          'weight_dependent_set_knockback',
        ],
      },
    };
    // validate
    const result = validate(hitboxes, schema);
    assert.equal(true, result.valid, JSON.stringify(result.errors));
  });
});
