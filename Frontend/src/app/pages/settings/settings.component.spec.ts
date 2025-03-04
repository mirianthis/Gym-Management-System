import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsComponent } from './settings.component';
import { SettingsService } from '../../services/settings-service/settings.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { GymSettings } from '../../models/settings.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let mockSettingsService: jasmine.SpyObj<SettingsService>;
  let mockMessageService: jasmine.SpyObj<MessageService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockSettingsService = jasmine.createSpyObj('SettingsService', [
      'getCheckSettings',
      'getSettings',
      'updateSettings',
      'addSettings'
    ]);
    mockMessageService = jasmine.createSpyObj('MessageService', ['add']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    mockSettingsService.getCheckSettings.and.returnValue(of({ exists: true }));  // Mock getCheckSettings correctly
    mockSettingsService.getSettings.and.returnValue(of(new GymSettings({ gym_name: 'dark' })));  // Mock getSettings correctly
  

    await TestBed.configureTestingModule({
      imports: [
        SettingsComponent,
        FormsModule,
        CommonModule,
        ToastModule
      ],
      providers: [
        { provide: SettingsService, useValue: mockSettingsService },
        { provide: MessageService, useValue: mockMessageService },
        { provide: Router, useValue: mockRouter },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize settings if they exist', () => {
    const mockSettings = new GymSettings({ gym_name: 'dark' });
    mockSettingsService.getCheckSettings.and.returnValue(of({ exists: true }));
    mockSettingsService.getSettings.and.returnValue(of(mockSettings));

    component.ngOnInit();

    expect(mockSettingsService.getCheckSettings).toHaveBeenCalled();
    expect(mockSettingsService.getSettings).toHaveBeenCalled();
    expect(component.newSettings).toEqual(mockSettings);
    expect(component.settingsExist).toBeTrue();
  });
  
  it('should reset settings when onClear is called', () => {
    const initialSettings = new GymSettings({ gym_name: 'dark' });
    component.newSettings = initialSettings;

    component.onClear();

    expect(component.newSettings).toEqual(new GymSettings());
  });

  it('should call updateSettings when settings exist and onSave is called', () => {
    // Mock response for checking settings existence
    const mockSettingsCheckResponse = { exists: true, settings_id: 1 };
    mockSettingsService.getCheckSettings.and.returnValue(of(mockSettingsCheckResponse));
  
    // Mock response for the updateSettings call
    const mockUpdatedSettings = { theme: 'light' };
    mockSettingsService.updateSettings.and.returnValue(of(mockUpdatedSettings));
  
    // Call onSave with mock settings data
    component.onSave(mockUpdatedSettings);
  
    // Verify that updateSettings was called with the correct parameters
    expect(mockSettingsService.updateSettings).toHaveBeenCalledWith(1, mockUpdatedSettings);

  });
  

  it('should call addSettings when settings do not exist and onSave is called', () => {
    const mockSettingsData = { theme: 'light' };
    const mockSettingsCheckResponse = { exists: false };
    mockSettingsService.getCheckSettings.and.returnValue(of(mockSettingsCheckResponse));
    mockSettingsService.addSettings.and.returnValue(of(mockSettingsData));

    component.onSave(mockSettingsData);

    expect(mockSettingsService.getCheckSettings).toHaveBeenCalled();
    expect(mockSettingsService.addSettings).toHaveBeenCalledWith(mockSettingsData);
  });

  it('should handle error when updating settings', () => {
    const mockSettingsData = { theme: 'light' };
    const mockSettingsCheckResponse = { exists: true, settings_id: 1 };
    const mockError = new Error('Error updating settings');
    mockSettingsService.getCheckSettings.and.returnValue(of(mockSettingsCheckResponse));
    mockSettingsService.updateSettings.and.returnValue(throwError(mockError));

    component.onSave(mockSettingsData);

    expect(mockSettingsService.getCheckSettings).toHaveBeenCalled();
    expect(mockSettingsService.updateSettings).toHaveBeenCalledWith(1, mockSettingsData);
  });

  it('should handle error when adding settings', () => {
    const mockSettingsData = { theme: 'light' };
    const mockSettingsCheckResponse = { exists: false };
    const mockError = new Error('Error adding settings');
    mockSettingsService.getCheckSettings.and.returnValue(of(mockSettingsCheckResponse));
    mockSettingsService.addSettings.and.returnValue(throwError(mockError));

    component.onSave(mockSettingsData);

    expect(mockSettingsService.getCheckSettings).toHaveBeenCalled();
    expect(mockSettingsService.addSettings).toHaveBeenCalledWith(mockSettingsData);
  });
});
