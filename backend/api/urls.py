from django.urls import path
from . import views
from . import seeders

app_name = "api"

urlpatterns = [
    path('student/', views.studentViews, name="Student-list"),
    path('student/<str:pk>', views.studentViews, name="Student"),

    path('promo/', views.promotionViews, name="Promotion-list"),
    path('promo/<str:pk>', views.promotionViews, name="Promotion"),

    path('seed/', seeders.seed, name="Seeding"),
]