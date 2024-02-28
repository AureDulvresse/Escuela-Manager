from django.urls import path
from . import views
from . import seeders

app_name = "api"

urlpatterns = [
    path('student/', views.studentView, name="Student-list"),
    path('student/<str:pk>', views.studentView, name="Student"),

    path('promo/', views.promotionView, name="Promotion-list"),
    path('promo/<str:pk>', views.promotionView, name="Promotion"),

    path('stats/', views.statsView, name="stats"),
    
    path('seed/', seeders.seed, name="Seeding"),
]