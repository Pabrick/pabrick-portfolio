import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientModule } from '@angular/common/http';

import { HeaderModule } from './views/header/header.module';
import { FooterModule } from './views/footer/footer.module';
import { AboutModule } from './views/about/about.module';
import { ToolsModule } from './views/tools/tools.module';
import { MenuModule } from './views/menu/menu.module';
import { WorkExperienceModule } from './views/work-experience/work-experience.module';
import { SideProjectsModule } from './views/side-projects/side-projects.module';
import { EducationModule } from './views/education/education.module';

import { AppComponent } from './app.component';


describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        HeaderModule,
        FooterModule,
        AboutModule,
        ToolsModule,
        MenuModule,
        WorkExperienceModule,
        SideProjectsModule,
        EducationModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'pabrick-portfolio'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('pabrick-portfolio');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Pablo Jiménez Beneyto');
  }));

});
