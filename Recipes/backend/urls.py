
from django.urls import path
from django.views.generic import TemplateView

from backend.views import RecipeAPIView, CategoryAPIView, RecipeDetailView, CategoryDetailView

urlpatterns = [
    path('recipelist/', RecipeAPIView.as_view({'get': 'list'})),
    path('categorylist/', CategoryAPIView.as_view({'get': 'list'})),
    path('recipe/<int:id>/', RecipeDetailView.as_view({'get': 'retrieve'})),
    path('recipelist/<int:id>/', CategoryDetailView.as_view({"get": "list"})),
    path('swagger-ui/', TemplateView.as_view(
        template_name='swagger-ui.html',
        extra_context={'schema_url': 'openapi-schema'}),
        name='swagger-ui'),
]