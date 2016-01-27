import assert from 'assert';
import { validate } from 'jsonschema';
import characters from '../src/characters';

describe('characters.json', () => {
  it('should valid schema', () => {
    // schema
    const schema = {
      type: 'object',
      properties: {},
      additionalProperties: {
        type: 'object',
        properties: {
          name_ja: { type: 'string' },
          air_jump_multiplier: { type: 'number' },
          air_mobility: { type: 'number' },
          fast_fall_terminal_velocity: { type: 'number' },
          gravity: { type: 'number' },
          jump_v_initial_velocity: { type: 'number' },
          max_aerial_h_velocity: { type: 'number' },
          terminal_velocity: { type: 'number' },
          weight: { type: 'number' },
        },
        required: [
          'name_ja',
          'air_jump_multiplier',
          'air_mobility',
          'fast_fall_terminal_velocity',
          'gravity',
          'jump_v_initial_velocity',
          'max_aerial_h_velocity',
          'terminal_velocity',
          'weight',
        ],
      },
    };
    // validate
    const result = validate(characters, schema);
    assert.equal(true, result.valid);
  });
});
