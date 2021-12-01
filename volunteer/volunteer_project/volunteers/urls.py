from django.urls import path
from .views import VolunteerListView

urlpatterns = [
    path('', VolunteerListView.as_view())
]