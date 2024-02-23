from django.urls import path
from . import views

app_name = "api"

urlpatterns = [
    path('student/', views.studentViews, name="Student-list"),
    path('student/<str:pk>', views.studentViews, name="Student"),
]