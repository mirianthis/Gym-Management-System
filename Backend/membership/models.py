from django.db import models

class Membership(models.Model):
    CATEGORY_CHOICES = [
        ('basic', 'Basic'),
        ('premium', 'Premium'),
        ('vip', 'VIP'),
    ]

    PERIOD_CHOICES = [
        ('monthly', 'Monthly'),
        ('quarterly', 'Quarterly'),
        ('yearly', 'Yearly'),
    ]

    LIMIT_CHOICES = [
        ('limited', 'Limited'),
        ('unlimited', 'Unlimited'),
    ]

    membership_name = models.CharField(max_length=100, unique=True)
    membership_category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)
    
    membership_period = models.CharField(max_length=10, choices=PERIOD_CHOICES)
    no_of_days = models.IntegerField(help_text="Number of days for this membership")
    
    membership_limit = models.CharField(max_length=10, choices=LIMIT_CHOICES)
    
    membership_amount = models.DecimalField(max_digits=10, decimal_places=2)
    
    select_class = models.CharField(max_length=100, help_text="Class type or category")

    installment_plan = models.BooleanField(default=False, help_text="Is installment available?")
    
    signup_fee = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    
    membership_description = models.TextField(blank=True, help_text="Optional membership details")
    
    membership_image = models.ImageField(upload_to='membership/images/', blank=True, null=True)

    def __str__(self):
        return f"{self.membership_name} - {self.membership_category}"
