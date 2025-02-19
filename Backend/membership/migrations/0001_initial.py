# Generated by Django 5.0.12 on 2025-02-19 20:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='InstallmentPlan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('duration_number', models.IntegerField()),
                ('duration_type', models.CharField(choices=[('Days', 'Days'), ('Weeks', 'Weeks'), ('Months', 'Months'), ('Years', 'Years')], max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Membership',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('category', models.CharField(max_length=100)),
                ('period', models.IntegerField(help_text='Duration in days')),
                ('limit_type', models.CharField(choices=[('Limited', 'Limited'), ('Unlimited', 'Unlimited')], max_length=10)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('selected_class', models.CharField(max_length=255)),
                ('installment_plan', models.CharField(max_length=100)),
                ('signup_fee', models.DecimalField(decimal_places=2, max_digits=10)),
                ('description', models.TextField(max_length=500)),
                ('image', models.ImageField(blank=True, null=True, upload_to='membership_images/')),
            ],
        ),
        migrations.CreateModel(
            name='MembershipCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, unique=True)),
            ],
        ),
    ]
