from django.urls import path
from . import views
from . import seeders

app_name = "api"

urlpatterns = [
    path('student/', views.studentViews, name="Student-list"),
    path('student/<str:pk>', views.studentViews, name="Student"),

    path('seed/', seeders.seed, name="Seeding"),
]