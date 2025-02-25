import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GymSettings } from '../../models/settings.model';
import { SettingsService } from '../../services/settings-service/settings.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastModule],
  providers: [MessageService],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

  newSettings = new GymSettings();

  settingsExist: boolean = false;


  constructor(private router: Router, private settingsService: SettingsService, private messageService: MessageService) { }


  ngOnInit(): void {

    this.settingsService.getCheckSettings().subscribe(data => {
      if (data.exists) {

        // If settings exist, fetch them and populate newSettings
        this.settingsService.getSettings().subscribe(settings => {
          this.newSettings = new GymSettings(settings); // Fill form with existing values
        });

        this.settingsExist = true;
      } else {

        // No settings exist, keep default newSettings
        console.log('No existing settings found. Using default values.');
      }
    });
  }

  onClear() {
    this.newSettings = new GymSettings();
  }


  onSave(settingsData: any) {
    this.settingsService.getCheckSettings().subscribe(data => {
      if (data.exists) {
        this.settingsService.updateSettings(data.settings_id, settingsData).subscribe(data => {
          console.log('Settings updated successfully:', data);
          this.messageService.add({severity: 'success', summary:  'Success', detail: 'Settings updated successfully' });
        },
          error => {
            console.error('Error updating settings:', error);
            this.messageService.add({severity: 'error', summary:  'Error', detail: 'Error updating settings' });
          }
        );
      } else {
        this.settingsService.addSettings(settingsData).subscribe(data => {
          console.log('Settings added successfully:', data);
          this.messageService.add({severity: 'success', summary:  'Success', detail: 'Settings added successfully' });
        },
          error => {
            console.error('Error adding settings:', error);
            this.messageService.add({severity: 'error', summary:  'Error', detail: 'Error adding settings' });
          }
        );
      }
    })
  }
}
