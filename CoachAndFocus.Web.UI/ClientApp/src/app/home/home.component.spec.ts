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
    expect(titleElement.textContent).toContain('Chris Brooksbank : Coach And Focus Website');
  });

  it('should render the github repo link', () => {
    const linkElement = fixture.debugElement.query(By.css('a[href="https://github.com/ChrisBrooksbank/coachandfocus"]')).nativeElement;
    expect(linkElement).toBeTruthy();
    expect(linkElement.textContent).toContain('public github repo');
  });  
});
