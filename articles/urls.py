from django.urls import path
from .views import ArticleListAPIView, ArticleDetailAPIView


urlpatterns = [
    path('articles/<int:pk>/', ArticleDetailAPIView.as_view()),
    path('articles/', ArticleListAPIView.as_view()),
]
