from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver

class Member(models.Model):
    # Personal Information
    first_name = models.CharField(max_length=100)
    middle_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=100)
    gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')])
    dob = models.DateField()  # Date of Birth
    group = models.CharField(max_length=100, blank=True, null=True)

    # Contact Information
    address = models.TextField()
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=20)
    mobile_number = models.CharField(max_length=15)
    phone = models.CharField(max_length=15, blank=True, null=True)
    email = models.EmailField()
    
    # Physical Information
    weight = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    height = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    chest = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    waist = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    thighs = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    arms = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    fat = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)

    # Login Information
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    display_image = models.ImageField(upload_to='members/photos/', blank=True, null=True)

    # More Information
    # staff_member = models.ForeignKey('Staff', on_delete=models.SET_NULL, null=True, blank=True)
    interested_area = models.CharField(max_length=100, blank=True, null=True)
    referred_by = models.CharField(max_length=100, blank=True, null=True)
    inquiry_date = models.DateField()
    trial_end_date = models.DateField()
    member_type = models.CharField(max_length=100)
    membership_type = models.CharField(max_length=100)
    class_choice = models.CharField(max_length=100)
    membership_status = models.CharField(max_length=50, choices=[('Active', 'Active'), ('Inactive', 'Inactive')])
    first_payment_date = models.DateField()
    

    # Member ID (auto-generated field)
    member_id = models.CharField(max_length=10, unique=True, blank=True, null=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    
# Signal to generate member_id before saving a new member
@receiver(pre_save, sender=Member)
def generate_member_id(sender, instance, **kwargs):
    # Check if it's a new member
    if not instance.member_id:
        # Get the last member created and get the next number
        last_member = Member.objects.all().order_by('id').last()
        if last_member:
            # Extract the number from the last member_id, increment it, and create the new member_id
            last_number = int(last_member.member_id[1:])  # Assuming member_id is like M1, M2, ...
            new_number = last_number + 1
        else:
            # For the first member, start with M1
            new_number = 1

        # Set the member_id as "M{new_number}"
        instance.member_id = f"M{new_number}"

