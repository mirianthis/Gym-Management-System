import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GymSettings } from '../../models/settings.model';
import { SettingsService } from '../../services/settings-service/settings.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  settings$?: Observable<any>;

  newSettings = new GymSettings();


  constructor(private router: Router, private settingsService: SettingsService) { }


  ngOnInit(): void {
    this.settings$ = this.settingsService.getSettings();
  }

  onCancel() {
    this.router.navigate(['/dashboard']);
  }


  onSave(settingsId: number, settingsData: any) {
    this.settings$?.subscribe(data => {
      if (data) {
        this.settingsService.updateSettings(settingsId, settingsData).subscribe(data => {
          console.log('Settings updated successfully:', data);
          this.router.navigate(['/dashboard']);
        },
          error => {
            console.error('Error updating settings:', error);
          }
        );
      } else {
        this.settingsService.addSettings(settingsData).subscribe(data => {
          console.log('Settings added successfully:', data);
          this.router.navigate(['/dashboard']);
        },
          error => {
            console.error('Error adding settings:', error);
          }
        );
      }
    })
  }
}
