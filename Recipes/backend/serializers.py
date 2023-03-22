from rest_framework import serializers

from .models import Recipe, Category


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('title', 'description', 'category', 'upload')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name', 'image')

