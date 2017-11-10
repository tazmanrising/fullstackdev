//import { UserMenuBarService } from './user-menu-bar.service';

//describe('UserMenuBarService', () => {
//    let userMenuBarService: UserMenuBarService;
//    beforeEach(() => {
//        userMenuBarService = new UserMenuBarService();
//    });

//    it('UserMenuBarService should be created', () => {
//        expect(UserMenuBarService).toBeTruthy();
//    });

//    it('should return 3 items', () => {
//        let userMenuBar = userMenuBarService.getDefaultMenu();
//        expect(userMenuBar.length).toBe(3);
//    });
//    it('should have 2nd object with name of Research', () => {
//        let userMenuBar = userMenuBarService.getDefaultMenu();
//        expect(userMenuBar[1].name).toContain('Research');
//    });

//    it('should have 3rd object with url of "/workqueue"', () => {
//        let userMenuBar = userMenuBarService.getDefaultMenu();
//        expect(userMenuBar[2].url).toContain('/workqueue');
//    });

//});