from django.conf.urls import re_path
from .views import CreateUserAPIView, authenticate_user
 
urlpatterns = [
    re_path(r'^create/$', CreateUserAPIView.as_view()),
    re_path(r'^auth/$', authenticate_user)
]
