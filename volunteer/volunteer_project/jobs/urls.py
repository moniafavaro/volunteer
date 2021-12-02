from django.urls import path
from .views import JobDetailView, JobListView

urlpatterns = [
    path('<int:pk>/', JobDetailView.as_view()),
    path('', JobListView.as_view())
]