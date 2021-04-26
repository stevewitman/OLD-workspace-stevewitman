import { async, TestBed } from '@angular/core/testing';
import { SharedUiPageNotFoundModule } from './shared-ui-page-not-found.module';

describe('SharedUiPageNotFoundModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiPageNotFoundModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(SharedUiPageNotFoundModule).toBeDefined();
  });
});
