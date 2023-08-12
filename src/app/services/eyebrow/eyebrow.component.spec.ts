import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EyebrowComponent } from './eyebrow.component';
import { FilterComponent } from 'src/app/filter/filter.component';
import { FormsModule } from '@angular/forms';
 // Adjust the path accordingly

describe('EyebrowComponent', () => {
  let component: EyebrowComponent;
  let fixture: ComponentFixture<EyebrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EyebrowComponent, FilterComponent], // Include the FilterComponent
      imports: [HttpClientTestingModule,FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EyebrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
