from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=64)
    image = models.FileField(upload_to='uploads/', blank=True, verbose_name='Изображение')

    def __str__(self):
        return self.name


class Recipe(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    category = models.ForeignKey("Category", on_delete=models.CASCADE, null=True)
    upload = models.FileField(upload_to='uploads/', blank=True, verbose_name='Изображение')

    def __str__(self):
        return self.title

