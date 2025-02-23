from django.db import models

class GymSettings(models.Model):
    gym_name = models.CharField(max_length=255)
    starting_year = models.IntegerField()
    gym_address = models.TextField()
    office_phone_number = models.CharField(max_length=20)
    country = models.CharField(max_length=100)
    system_language = models.CharField(max_length=50)
    email = models.EmailField()
    gym_logo = models.ImageField(upload_to='gym_logos/', blank=True, null=True)
    cover_image = models.ImageField(upload_to='cover_images/', blank=True, null=True)

    # Measurement Units
    weight_unit = models.CharField(max_length=10, default="kg")
    height_unit = models.CharField(max_length=10, default="cm")
    chest_unit = models.CharField(max_length=10, default="cm")
    waist_unit = models.CharField(max_length=10, default="cm")
    arms_unit = models.CharField(max_length=10, default="cm")
    fat_unit = models.CharField(max_length=10, default="%")

    # Member Privacy Settings
    members_can_view_others = models.BooleanField(default=False)
    staff_can_view_trainees = models.BooleanField(default=False)

    # Membership Alert Message Settings
    enable_alert_email = models.BooleanField(default=False)
    reminder_before_days = models.IntegerField(blank=True, null=True)
    reminder_message = models.TextField(blank=True, null=True)

    # Message Settings
    members_can_message_each_other = models.BooleanField(default=False)

    # Header & Footer Text
    left_header_text = models.CharField(max_length=255, blank=True, null=True)
    footer_text = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.gym_name
