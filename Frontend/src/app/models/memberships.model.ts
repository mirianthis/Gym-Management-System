export interface Membership {
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
}
