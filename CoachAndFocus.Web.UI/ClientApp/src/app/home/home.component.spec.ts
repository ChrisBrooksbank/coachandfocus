import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    const titleElement = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(titleElement.textContent).toContain('Chris Brooksbank : Coach And Focus Website 2024');
  });

  it('should render the github repo link', () => {
    const linkElement = fixture.debugElement.query(By.css('a[href="https://github.com/ChrisBrooksbank/coachandfocus"]')).nativeElement;
    expect(linkElement).toBeTruthy();
    expect(linkElement.textContent).toContain('public github repo');
  });

  it('should render the latest release information', () => {
    const releaseElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(releaseElement.textContent).toContain('latest release : V6 March 2024 - loads updated parliamentary bills');
  }); 
});
