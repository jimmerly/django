from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from django.shortcuts import redirect


def home(request):
    return render(request, 'home/home.html')


def pillowliterature(request):
    return render(request, 'home/pillowliterature.html')


def swingmusic(request):
    return render(request, 'home/swingmusic.html')


def furballpictures(request):
    return render(request, 'home/furballpictures.html')


@login_required
def profile(request):
    return render(request, 'account/profile.html')


def logout_view(request):
    logout(request)
    return redirect('home')
