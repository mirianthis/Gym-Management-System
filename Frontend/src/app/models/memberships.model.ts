export class Membership {
  id?: number; // Optional, only needed if updating existing memberships
  name: string;
  category: string;
  period: string;
  noOfDays?: number; // Optional, only if period is not unlimited
  membershipLimit: 'Limited' | 'Unlimited';
  amount: number;
  classSelection: string;
  installmentPlan: boolean;
  signupFee: number;
  description: string;
  imageUrl?: string; // Store image URL
  originalData?: any;

  constructor(data: Partial<Membership> = {}) {
    this.id = data.id;
    this.name = data.name || '';
    this.category = data.category || '';
    this.period = data.period || '';
    this.noOfDays = data.noOfDays;
    this.membershipLimit = data.membershipLimit || 'Limited';
    this.amount = data.amount || 0;
    this.classSelection = data.classSelection || '';
    this.installmentPlan = data.installmentPlan || false;
    this.signupFee = data.signupFee || 0;
    this.description = data.description || '';
    this.imageUrl = data.imageUrl;
    this.originalData = data.originalData;
  }
}

export class MembershipCategory {
  name: string;
  originalData?: any;

  constructor(data: Partial<MembershipCategory> = {}) {
    this.name = data.name || '';
    this.originalData = data.originalData;
  }
}

export class MembershipInstallmentPlan {
  duration_number: number;
  duration_type: string;
  originalData?: any;

  constructor(data: Partial<MembershipInstallmentPlan> = {}) {
    this.duration_number = data.duration_number || 0;
    this.duration_type = data.duration_type || '';
    this.originalData = data.originalData;
  }
}
