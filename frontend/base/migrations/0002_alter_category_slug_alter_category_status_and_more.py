# Generated by Django 4.1.2 on 2023-01-04 22:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="category", name="slug", field=models.SlugField(unique=True),
        ),
        migrations.AlterField(
            model_name="category",
            name="status",
            field=models.CharField(
                choices=[
                    ("draft", "Taslak"),
                    ("published", "Yayınlandı"),
                    ("deleted", "Silindi"),
                ],
                default="draft",
                max_length=12,
            ),
        ),
        migrations.AlterField(
            model_name="comment",
            name="status",
            field=models.CharField(
                choices=[("draft", "Taslak"), ("No", "Hayır"), ("Yes", "Evet")],
                default="draft",
                max_length=12,
            ),
        ),
        migrations.AlterField(
            model_name="faq",
            name="status",
            field=models.CharField(
                choices=[
                    ("draft", "Taslak"),
                    ("published", "Yayınlandı"),
                    ("deleted", "Silindi"),
                ],
                default="draft",
                max_length=12,
            ),
        ),
        migrations.AlterField(
            model_name="orders",
            name="status",
            field=models.CharField(
                choices=[("draft", "Taslak"), ("No", "Hayır"), ("Yes", "Evet")],
                default="draft",
                max_length=12,
            ),
        ),
        migrations.AlterField(
            model_name="product", name="slug", field=models.SlugField(unique=True),
        ),
        migrations.AlterField(
            model_name="product",
            name="status",
            field=models.CharField(
                choices=[
                    ("draft", "Taslak"),
                    ("published", "Yayınlandı"),
                    ("deleted", "Silindi"),
                ],
                default="draft",
                max_length=12,
            ),
        ),
        migrations.AlterField(
            model_name="productorder",
            name="status",
            field=models.CharField(
                choices=[("draft", "Taslak"), ("No", "Hayır"), ("Yes", "Evet")],
                default="draft",
                max_length=12,
            ),
        ),
        migrations.AlterField(
            model_name="shop", name="slug", field=models.SlugField(unique=True),
        ),
        migrations.AlterField(
            model_name="shop",
            name="status",
            field=models.CharField(
                choices=[("draft", "Taslak"), ("No", "Hayır"), ("Yes", "Evet")],
                default="draft",
                max_length=12,
            ),
        ),
    ]