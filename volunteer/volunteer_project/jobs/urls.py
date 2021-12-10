from django.urls import path
from .views import JobDetailView, JobListView, JobVolunteerView

urlpatterns = [
    path('<int:pk>/', JobDetailView.as_view()),
    path('<int:pk>/volunteers/', JobVolunteerView.as_view()),
    path('', JobListView.as_view())
]