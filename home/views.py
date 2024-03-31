from django.shortcuts import render


def home(request):
    return render(request, 'home/home.html')


def pillowliterature(request):
    return render(request, 'home/pillowliterature.html')


def swingmusic(request):
    return render(request, 'home/swingmusic.html')


def furballpictures(request):
    return render(request, 'home/furballpictures.html')