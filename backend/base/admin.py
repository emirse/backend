from django.contrib import admin
from mptt.admin import MPTTModelAdmin

# Register your models here.
from base.models import Category, Product, Orders, Comment, Faq, ImageGallery, ProductOrder, Shop


class CategoryAdmin(MPTTModelAdmin):
    list_display = ['title', 'status']
    list_filter = ['status']
    prepopulated_fields = {'slug': ('title',)}


class ProductAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'price', 'amount', 'status']
    list_filter = ['status', 'category']
    prepopulated_fields = {'slug': ('title',)}


admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Orders,)
admin.site.register(Comment, )
admin.site.register(Faq, )
admin.site.register(ImageGallery, )
admin.site.register(ProductOrder,)
admin.site.register(Shop, )
