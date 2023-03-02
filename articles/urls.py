from django.urls import path
from .views import ArticleListAPIView, ArticleDetailAPIView, UserListAPIView


urlpatterns = [
    path('articles/<int:pk>/', ArticleDetailAPIView.as_view()),
    path('articles/', ArticleListAPIView.as_view()),
    # path('user/articles/<int:pk>/', UserArticleDetailAPIView.as_view()),
    path('user/articles/', UserListAPIView.as_view()),
]
