import assert from 'assert';
import { validate } from 'jsonschema';
import stages from '../src/stages';

describe('stages.json', () => {
  it('should valid schema', () => {
    // schema
    const schema = {
      type: 'object',
      additionalProperties: {
        type: 'object',
        properties: {
          blastLine: {
            type: 'object',
            properties: {
              higher: { type: 'number' },
              lower: { type: 'number' },
              right: { type: 'number' },
              left: { type: 'number' },
            },
            required: [
              'higher',
              'lower',
              'right',
              'left',
            ],
          },
        },
        required: ['blastLine'],
      },
    };
    // validate
    const result = validate(stages, schema);
    assert.equal(true, result.valid);
  });
});
