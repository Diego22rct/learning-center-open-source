import { Student } from './student.entity';

describe('StudentEntity', () => {
  it('should create an instance', () => {
    expect(new Student()).toBeTruthy();
  });
});
