from django.urls import path
from .views import VolunteerDetailView, VolunteerJobView, VolunteerListView

urlpatterns = [
    path('<int:pk>/', VolunteerDetailView.as_view()),
    path('<int:pk>/jobs/', VolunteerJobView.as_view()),
    path('', VolunteerListView.as_view())
]