import { currentYear } from '@src/lib/utils';

describe('Utils', () => {
  describe('currentYear', () => {
    it('returns the correct year', () => {
      expect(currentYear()).toEqual(new Date().getFullYear());
    });
  });
});
