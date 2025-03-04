import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SettingsService } from './settings.service';
import { HttpClient } from '@angular/common/http';

describe('SettingsService', () => {
  let service: SettingsService;
  let httpMock: HttpTestingController;
  const settingsUrl = 'http://127.0.0.1:8000/api/settings/settings/';
  const checkSettingsUrl = 'http://127.0.0.1:8000/api/settings/check/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Mock HttpClient module
      providers: [SettingsService]
    });

    service = TestBed.inject(SettingsService);
    httpMock = TestBed.inject(HttpTestingController);  // Inject HttpTestingController
  });

  afterEach(() => {
    // Ensure that there are no outstanding HTTP requests
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get settings', () => {
    const mockSettings = { theme: 'light', gym_name: 'My Gym' };

    // Call the service method
    service.getSettings().subscribe(settings => {
      expect(settings).toEqual(mockSettings);
    });

    // Mock the HTTP GET request
    const req = httpMock.expectOne(settingsUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockSettings);  // Respond with mock data
  });

  it('should get check settings', () => {
    const mockCheckResponse = { exists: true };

    // Call the service method
    service.getCheckSettings().subscribe(response => {
      expect(response).toEqual(mockCheckResponse);
    });

    // Mock the HTTP GET request
    const req = httpMock.expectOne(checkSettingsUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockCheckResponse);  // Respond with mock data
  });

  it('should add settings', () => {
    const newSettings = { theme: 'dark', gym_name: 'New Gym' };
    const mockResponse = { id: 1, ...newSettings };

    // Call the service method
    service.addSettings(newSettings).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    // Mock the HTTP POST request
    const req = httpMock.expectOne(settingsUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newSettings);
    req.flush(mockResponse);  // Respond with mock data
  });

  it('should update settings', () => {
    const updatedSettings = { theme: 'light', gym_name: 'Updated Gym' };
    const mockResponse = { id: 1, ...updatedSettings };

    // Call the service method
    service.updateSettings(1, updatedSettings).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    // Mock the HTTP PUT request
    const req = httpMock.expectOne(`${settingsUrl}1/`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updatedSettings);
    req.flush(mockResponse);  // Respond with mock data
  });
});
