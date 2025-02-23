export class GymSettings {
  id?: number;
  gym_name: string;
  starting_year: number;
  gym_address: string;
  office_phone_number: string;
  country: string;
  system_language: string;
  email: string;
  gym_logo?: File | string;
  cover_image?: File | string;
  weight_unit: string;
  height_unit: string;
  chest_unit: string;
  waist_unit: string;
  arms_unit: string;
  fat_unit: string;
  member_can_view_others: boolean;
  staff_can_view_trainees: boolean;
  enable_alert_email: boolean;
  reminder_before_days?: number;
  reminder_message?: string;
  members_can_message_each_other: boolean;
  left_header_text?: string;
  footer_text?: string;

  constructor(data: Partial<GymSettings> = {}) {
    this.id = data.id;
    this.gym_name = data.gym_name || '';
    this.starting_year = data.starting_year || new Date().getFullYear();
    this.gym_address = data.gym_address || '';
    this.office_phone_number = data.office_phone_number || '';
    this.country = data.country || '';
    this.system_language = data.system_language || 'English';
    this.email = data.email || '';
    this.gym_logo = data.gym_logo;
    this.cover_image = data.cover_image;
    this.weight_unit = data.weight_unit || 'kg';
    this.height_unit = data.height_unit || 'cm';
    this.chest_unit = data.chest_unit || 'cm';
    this.waist_unit = data.waist_unit || 'cm';
    this.arms_unit = data.arms_unit || 'cm';
    this.fat_unit = data.fat_unit || '%';
    this.member_can_view_others = data.member_can_view_others || false;
    this.staff_can_view_trainees = data.staff_can_view_trainees || false;
    this.enable_alert_email = data.enable_alert_email || false;
    this.reminder_before_days = data.reminder_before_days;
    this.reminder_message = data.reminder_message;
    this.members_can_message_each_other = data.members_can_message_each_other || false;
    this.left_header_text = data.left_header_text;
    this.footer_text = data.footer_text;
  }
}
