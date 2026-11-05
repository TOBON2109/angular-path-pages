import { routes } from './app.routes';

describe('routes', () => {
  it('should define home, about and contact paths', () => {
    const paths = routes.map((route) => route.path);
    expect(paths).toContain('');
    expect(paths).toContain('about');
    expect(paths).toContain('contact');
  });

  it('should redirect unknown paths to home', () => {
    const wildcard = routes.find((route) => route.path === '**');
    expect(wildcard?.redirectTo).toBe('');
  });
});