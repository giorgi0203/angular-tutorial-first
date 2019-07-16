import { MenuComponent } from './menu.component';

describe('menu component testing', () => {

  let menuComponent: MenuComponent;
  beforeEach(() => {
    menuComponent = new MenuComponent();
  });

  it('default value for isOpen should be false', () => {
    expect(menuComponent.isOpen).toBe(false);
  });
  it('Method openMenu should change isOpen true', () => {
    menuComponent.openMenu();
    expect(menuComponent.isOpen).toBe(true);
  });
  it('Method closeMenu should change isOpen false', () => {
    menuComponent.closeMenu();
    expect(menuComponent.isOpen).toBe(false);
  });
});
