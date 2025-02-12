export class Membership {
  id?: number; // Optional, only needed if updating existing memberships
  name: string;
  category: number;
  period: string;
  noOfDays?: number; // Optional, only if period is not unlimited
  limit_type: 'Limited' | 'Unlimited';
  amount: number;
  selected_class: string;
  installment_plan!: number;
  signup_fee: number;
  description: string;
  image?: string; // Store image URL
  originalData?: any;

  constructor(data: Partial<Membership> = {}) {
    this.id = data.id;
    this.name = data.name || '';
    this.category = data.category!;
    this.period = data.period || '';
    this.noOfDays = data.noOfDays;
    this.limit_type = data.limit_type || 'Limited';
    this.amount = data.amount || 0;
    this.selected_class = data.selected_class || '';
    this.signup_fee = data.signup_fee || 0;
    this.description = data.description || '';
    this.image = data.image;
    this.originalData = data.originalData;
  }
}

export class MembershipCategory {
  id: number;
  name: string;
  originalData?: any;

  constructor(data: Partial<MembershipCategory> = {}) {
    this.id = data.id || 0;
    this.name = data.name || '';
    this.originalData = data.originalData;
  }
}

export class MembershipInstallmentPlan {
  id: number;
  duration_number: number;
  duration_type: string;
  originalData?: any;

  constructor(data: Partial<MembershipInstallmentPlan> = {}) {
    this.id = data.id || 0;
    this.duration_number = data.duration_number || 0;
    this.duration_type = data.duration_type || '';
    this.originalData = data.originalData;
  }
}
