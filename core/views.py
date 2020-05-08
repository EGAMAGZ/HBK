from django.shortcuts import render

# Create your views here.
def cake(request):
    return render(request,"core/cake.html")

def main(request):
    return render(request,"core/home.html")