from rest_framework import viewsets
from .models import Recipe, Category
from .serializers import RecipeSerializer, CategorySerializer


class RecipeDetailView(viewsets.ModelViewSet):
    serializer_class = RecipeSerializer

    def get_queryset(self):
        recipe = Recipe.objects.filter(id=self.kwargs["pk"])
        return recipe


class CategoryAPIView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailView(viewsets.ModelViewSet):

    serializer_class = RecipeSerializer

    def get_queryset(self):
        recipes = Recipe.objects.filter(category=self.kwargs["category_id"])
        return recipes





