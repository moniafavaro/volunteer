from django.urls import path
from .views import CompanyDetailView, CompanyJobView, CompanyListView

urlpatterns = [
    path('<int:pk>/', CompanyDetailView.as_view()),
    path('<int:pk>/jobs/', CompanyJobView.as_view()),
    path('', CompanyListView.as_view())
]