from rest_framework import viewsets
from .models import Recipe, Category
from .serializers import RecipeSerializer, CategorySerializer


class RecipeAPIView(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class RecipeDetailView(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class CategoryAPIView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailView(viewsets.ModelViewSet):

    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    def get_queryset(self):
        recipes = Recipe.objects.filter(category=self.kwargs["pk"])
        return recipes





