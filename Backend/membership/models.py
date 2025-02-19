from django.db import models

class MembershipCategory(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name

class InstallmentPlan(models.Model):
    duration_number = models.IntegerField()
    duration_type = models.CharField(max_length=10, choices=[('Days', 'Days'), ('Weeks', 'Weeks'), ('Months', 'Months'), ('Years', 'Years')])
    
    def __str__(self):
        return f"{self.duration_number} {self.duration_type}"

class Membership(models.Model):
    LIMIT_CHOICES = [
        ('Limited', 'Limited'),
        ('Unlimited', 'Unlimited')
    ]
    
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    period = models.IntegerField(help_text="Duration in days")
    limit_type = models.CharField(max_length=10, choices=LIMIT_CHOICES)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    selected_class = models.CharField(max_length=255)
    installment_plan = models.CharField(max_length=100)
    signup_fee = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(max_length=500)
    image = models.ImageField(upload_to='membership_images/', null=True, blank=True)

    def __str__(self):
        return self.name
