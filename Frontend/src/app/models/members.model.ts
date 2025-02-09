export class Member {
  first_name: string;
  middle_name?: string;
  last_name: string;
  gender: string;
  dob: string;
  group: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  mobile_number: string;
  phone?: string;
  email: string;
  weight?: number;
  height?: number;
  chest?: number;
  waist?: number;
  thighs?: number;
  arms?: number;
  fat?: number;
  username: string;
  password: string;
  display_image?: string;
  interested_area?: string;
  referred_by?: string;
  inquiry_date: string;
  trial_end_date?: string;
  member_type: string;
  membership_type: string;
  class_choice: string;
  membership_status: string;
  first_payment_date?: string;
  originalData?: any;

  constructor(data?: Partial<Member>) {
    this.first_name = data?.first_name || '';
    this.middle_name = data?.middle_name || '';
    this.last_name = data?.last_name || '';
    this.gender = data?.gender || 'Other';
    this.dob = data?.dob || '';
    this.group = data?.group || '';
    this.address = data?.address || '';
    this.city = data?.city || '';
    this.state = data?.state || '';
    this.zip_code = data?.zip_code || '';
    this.mobile_number = data?.mobile_number || '';
    this.phone = data?.phone || '';
    this.email = data?.email || '';
    this.weight = data?.weight || 0;
    this.height = data?.height || 0;
    this.chest = data?.chest || 0;
    this.waist = data?.waist || 0;
    this.thighs = data?.thighs || 0;
    this.arms = data?.arms || 0;
    this.fat = data?.fat || 0;
    this.username = data?.username || '';
    this.password = data?.password || '';
    // this.display_image = data?.display_image || '';
    this.interested_area = data?.interested_area || '';
    this.referred_by = data?.referred_by || '';
    this.inquiry_date = data?.inquiry_date || new Date().toISOString();
    this.trial_end_date = data?.trial_end_date || '';
    this.member_type = data?.member_type || '';
    this.membership_type = data?.membership_type || '';
    this.class_choice = data?.class_choice || '';
    this.membership_status = data?.membership_status || 'Inactive';
    this.first_payment_date = data?.first_payment_date || '';
    this.originalData = data?.originalData;
  }

  getFullName(): string {
    return `${this.first_name} ${this.middle_name ? this.middle_name + ' ' : ''}${this.last_name}`;
  }

  isActive(): boolean {
    return this.membership_status === 'Active';
  }
}
