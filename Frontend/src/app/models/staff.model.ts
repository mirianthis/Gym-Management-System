export class Staff {
  id?: number;
  first_name: string;
  middle_name?: string;
  last_name: string;
  gender: string;
  date_of_birth: string;
  role: string;
  specialization: string;
  home_town_address: string;
  city: string;
  mobile_number: string;
  phone?: string;
  email: string;
  username: string;
  password: string;
  display_image?: string;
  originalData?: any;

  constructor(data: Partial<Staff> = {}) {
    this.id = data.id;
    this.first_name = data?.first_name || '';
    this.middle_name = data?.middle_name || '';
    this.last_name = data?.last_name || '';
    this.gender = data?.gender || 'Other';
    this.date_of_birth = data?.date_of_birth || '';
    this.role = data?.role!;
    this.specialization = data?.specialization!;
    this.phone = data?.phone || '';
    this.city = data?.city || '';
    this.mobile_number = data?.mobile_number || '';
    this.home_town_address = data?.home_town_address || '';
    this.email = data?.email || '';
    this.username = data?.username || '';
    this.password = data?.password || '';
    // this.display_image = data?.display_image || '';
    this.originalData = data?.originalData;
  }
}

export class StaffRole {
  id: number;
  name: string;
  originalData?: any;

  constructor(data: Partial<StaffRole> = {}) {
    this.id = data.id || 0;
    this.name = data.name || '';
    this.originalData = data.originalData;
  }
}

export class StaffSpecialization {
  id: number;
  name: string;
  originalData?: any;

  constructor(data: Partial<StaffSpecialization> = {}) {
    this.id = data.id || 0;
    this.name = data.name || '';
    this.originalData = data.originalData;
  }
}
