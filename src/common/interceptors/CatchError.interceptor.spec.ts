import { CatchErrorInterceptor } from './CatchError.interceptor';

describe('ErrorsInterceptor', () => {
  it('should be defined', () => {
    expect(new CatchErrorInterceptor()).toBeDefined();
  });
});
