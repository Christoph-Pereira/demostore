import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepicker, MatDatepickerActions, MatDatepickerToggle} from '@angular/material/datepicker';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef} from '@angular/material/dialog';
import {MatFormField, MatHint, MatLabel} from '@angular/material/form-field';
import {ActivatedRoute} from '@angular/router';
import {MockComponents, MockDirectives} from 'ng-mocks';
import {ConfiguratorComponent} from './configurator.component';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatInput} from '@angular/material/input';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('ConfiguratorComponent', () => {
  let component: ConfiguratorComponent;
  let fixture: ComponentFixture<ConfiguratorComponent>;

  const mockedActivatedRoute: any = {snapshot: {paramMap: {get: jest.fn()}}};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
      declarations: [
        ConfiguratorComponent,
        MockComponents(
          MatCheckbox,
          MatFormField,
          MatDatepicker,
          MatDatepickerActions,
          MatDatepickerToggle,
        ),
        ...MockDirectives(
          MatDialogActions,
          MatDialogContent,
          MatLabel,
          MatHint,
          MatInput,
        )
      ],
      providers: [
        {provide: ActivatedRoute, useValue: mockedActivatedRoute},
        {
          provide: MatDialogRef,
          useValue: []
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        },
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive a value', () => {
    expect(component.country).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.configuratorForm.valid).toBeFalsy();
  });

  it('date field should initially be invalid', () => {
    let date = component.configuratorForm.controls['date'];
    expect(date.valid).toBeFalsy();
  });

  it('duration field should initially be invalid', () => {
    let duration = component.configuratorForm.controls['duration'];
    expect(duration.valid).toBeFalsy();
  });

  it('date field validity', () => {
    let errors;
    let date = component.configuratorForm.controls['date'];
    errors = date.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('form is valid when requiered fields are filled out', () => {
    expect(component.configuratorForm.valid).toBeFalsy();
    component.configuratorForm.controls['date'].setValue("2022-04-27T22:00:00.000Z");
    component.configuratorForm.controls['duration'].setValue(6);
    expect(component.configuratorForm.valid).toBeTruthy();
  });
});