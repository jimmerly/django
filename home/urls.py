from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('pillowliterature/', views.pillowliterature, name='pillowliterature'),
    path('swingmusic/', views.swingmusic, name='swingmusic'),
    path('furballpictures/', views.furballpictures, name='furballpictures'),
]

