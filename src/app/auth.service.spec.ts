import { AuthService } from './auth.service';
describe('auth service test', () => {

  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
  });

  it('default value should be false', () => {
    expect(authService.isAccessAllowed).toBe(false);
  });

  it('Method isUserAuthenticated should return isAccessAllowed', () => {
    expect(authService.isUserAuthenticated()).toBe(authService.isAccessAllowed);
  });

  it('Method allowAccess should change isAccessAllowed to true', () => {
    authService.allowAccess();
    expect(authService.isAccessAllowed).toBe(true);
  });

  it('Method denyAccess should change isAccessAllowed to false', () => {
    authService.denyAccess();
    expect(authService.isAccessAllowed).toBe(false);
  });

});
