
from django.urls import path
from django.views.generic import TemplateView

from backend.views import  CategoryAPIView, RecipeDetailView, CategoryDetailView

urlpatterns = [
    path('categorylist/', CategoryAPIView.as_view({'get': 'list'})),
    path('recipe/<int:pk>/', RecipeDetailView.as_view({'get': 'retrieve'})),
    path('category/<int:category_id>/recipelist/', CategoryDetailView.as_view({"get": "list"})),
    path('swagger-ui/', TemplateView.as_view(
        template_name='swagger-ui.html',
        extra_context={'schema_url': 'openapi-schema'}),
        name='swagger-ui'),
]