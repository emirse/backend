from django.db import models
from django.contrib.auth.models import User
from mptt.models import MPTTModel, TreeForeignKey
# Create your models here.
DEFAULT_STATUS = 'draft'
STATUS = {
    ('draft', 'Taslak'),
    ('published', 'Yayınlandı'),
    ('deleted', 'Silindi'),
}

DEFAULT_CONFIRMATION_STATUS = 'draft'
CONFIRMATION_STATUS = {
    ('draft', 'Taslak'),
    ('Yes', 'Evet'),
    ('No', 'Hayır'),
}


class Category(MPTTModel):
    title = models.CharField(max_length=50, null=False, blank=False)
    parent = TreeForeignKey(
        'self', blank=True, null=True, related_name='children', on_delete=models.CASCADE)
    keywords = models.CharField(max_length=255, null=True, blank=True)
    description = models.CharField(max_length=255, null=True, blank=True)
    image = models.ImageField(null=False, blank=False, default="images/")
    status = models.CharField(
        default=DEFAULT_STATUS,
        choices=STATUS,
        max_length=12,
    )
    slug = models.SlugField(null=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class MPTTMeta:
        order_insertion_by = ['-created_at']

    def __str__(self):
        full_path = [self.title]
        k = self.parent
        while k is not None:
            full_path.append(k.title)
            k = k.parent
        return '>>'.join(full_path[::-1])


class Shop(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    shop_name = models.CharField(max_length=30, null=False, blank=True)
    keywords = models.CharField(max_length=50, null=True, blank=True)
    description = models.CharField(max_length=1000, null=True, blank=True)
    image = models.ImageField(null=False, blank=False, default="images/")
    rating = models.IntegerField(default=0, null=True, blank=True)
    status = models.CharField(
        default=DEFAULT_CONFIRMATION_STATUS,
        choices=CONFIRMATION_STATUS,
        max_length=12
    )
    slug = models.SlugField(null=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.shop_name


class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=50, null=False, blank=False)
    brand = models.CharField(max_length=50, null=False, blank=True)
    keywords = models.CharField(max_length=50, null=True, blank=True)
    description = models.CharField(max_length=1000, null=True, blank=True)
    image = models.ImageField(null=False, blank=False, default="images/")
    detail = models.TextField(null=True, blank=True)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=False, blank=False)
    amount = models.IntegerField(default=0, null=False, blank=False)
    rating = models.IntegerField(default=0, null=False, blank=False)
    status = models.CharField(
        default=DEFAULT_STATUS,
        choices=STATUS,
        max_length=12,
    )
    shop = models.ForeignKey(
        Shop, on_delete=models.CASCADE, related_name="shop")
    slug = models.SlugField(null=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Comment(models.Model):
    product = models.OneToOneField(Product, on_delete=models.CASCADE)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    comment = models.CharField(max_length=255)
    rating = models.IntegerField(default=0, null=False, blank=False)
    status = models.CharField(
        default=DEFAULT_CONFIRMATION_STATUS,
        choices=CONFIRMATION_STATUS,
        max_length=12
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.comment


class ImageGallery(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    title = models.CharField(max_length=50, null=False, blank=False)
    image = models.ImageField(null=False, blank=False, default="images/")

    def __str__(self):
        return self.title


class Orders(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, null=False, blank=False)
    surname = models.CharField(max_length=50, null=False, blank=False)
    email = models.EmailField(null=False, blank=False)
    address = models.CharField(max_length=350, null=False, blank=False)
    phone = models.CharField(blank=False, null=False, max_length=11)
    status = models.CharField(
        default=DEFAULT_CONFIRMATION_STATUS,
        choices=CONFIRMATION_STATUS,
        max_length=12)
    note = models.CharField(max_length=255, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class ProductOrder(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    order = models.ForeignKey(Orders, on_delete=models.CASCADE)
    price = models.DecimalField(
        max_digits=20, decimal_places=2, null=False, blank=False)
    amount = models.IntegerField(default=0, null=False, blank=False)
    total = models.DecimalField(
        max_digits=7, decimal_places=2, null=False, blank=False)
    status = models.CharField(
        default=DEFAULT_CONFIRMATION_STATUS,
        choices=CONFIRMATION_STATUS,
        max_length=12)
    note = models.CharField(max_length=255, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Faq(models.Model):
    question = models.CharField(max_length=255, null=False, blank=False)
    answer = models.CharField(max_length=255, null=False, blank=False)
    status = models.CharField(
        default=DEFAULT_STATUS,
        choices=STATUS,
        max_length=12,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
