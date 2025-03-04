from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from .models import MembershipCategory


class MembershipCategoryViewSetTest(APITestCase):
    
    def setUp(self):
        self.category_data = {'name': 'Yoga'}
        self.category = MembershipCategory.objects.create(**self.category_data)
        self.url = reverse('category-list')  # URL to list categories

    def test_create_category(self):
        data = {'name': 'Pilates'}
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['name'], 'Pilates')

    def test_get_categories(self):
        response = self.client.get(self.url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreater(len(response.data), 0)

    def test_update_category(self):
        category_id = self.category.id
        data = {'name': 'Advanced Yoga'}
        response = self.client.put(reverse('category-detail', args=[category_id]), data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['name'], 'Advanced Yoga')

    def test_delete_category(self):
        category_id = self.category.id
        response = self.client.delete(reverse('category-detail', args=[category_id]))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

from .models import InstallmentPlan

class InstallmentPlanViewSetTest(APITestCase):
    
    def setUp(self):
        self.plan_data = {'duration_number': 12, 'duration_type': 'Months'}
        self.plan = InstallmentPlan.objects.create(**self.plan_data)
        self.url = reverse('installment-list')  # URL to list installment plans

    def test_create_installment_plan(self):
        data = {'duration_number': 6, 'duration_type': 'Months'}
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['duration_number'], 6)

    def test_get_installment_plans(self):
        response = self.client.get(self.url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreater(len(response.data), 0)

    def test_update_installment_plan(self):
        plan_id = self.plan.id
        data = {'duration_number': 24, 'duration_type': 'Months'}
        response = self.client.put(reverse('installment-detail', args=[plan_id]), data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['duration_number'], 24)

    def test_delete_installment_plan(self):
        plan_id = self.plan.id
        response = self.client.delete(reverse('installment-detail', args=[plan_id]))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

from .models import Membership, MembershipCategory, InstallmentPlan

class MembershipViewSetTest(APITestCase):
    
    def setUp(self):
        self.category = MembershipCategory.objects.create(name='Yoga')
        self.plan = InstallmentPlan.objects.create(duration_number=12, duration_type='Months')
        self.membership_data = {
            'name': 'Basic Membership',
            'category': self.category.name,
            'period': 30,
            'limit_type': 'Limited',
            'amount': 100.00,
            'selected_class': 'Yoga',
            'installment_plan': f'{self.plan.duration_number} {self.plan.duration_type}',
            'signup_fee': 50.00,
            'description': 'Basic membership for yoga class',
        }
        self.membership = Membership.objects.create(**self.membership_data)
        self.url = reverse('membership-list')  # URL to list memberships

    def test_delete_membership(self):
        membership_id = self.membership.id
        response = self.client.delete(reverse('membership-detail', args=[membership_id]))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

