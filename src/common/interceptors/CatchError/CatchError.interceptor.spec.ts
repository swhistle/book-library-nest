import { CatchErrorInterceptor } from './catchError.interceptor';

describe('ErrorsInterceptor', () => {
  it('should be defined', () => {
    expect(new CatchErrorInterceptor()).toBeDefined();
  });
});
