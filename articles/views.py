from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Article
from .serializers import ArticleSerializer
from .permissions import IsAuthOrReadOnly


# Create your views here.
class ArticleListAPIView(generics.ListCreateAPIView):
    queryset = Article.objects.order_by('-created_at')
    serializer_class = ArticleSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ArticleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (IsAuthOrReadOnly,)
