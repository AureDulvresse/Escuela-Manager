from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Student, Promotion
from .serializers import StudentSerializer, PromotionSerializer

from .utils import Utils

# Create your views here.

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def promotionViews(request, pk=None) -> Response:
    
    if request.method == "GET":

        if not pk:
            return Utils._list(Promotion, StudentSerializer)
        
        else:
            return Utils._get(Promotion, StudentSerializer, pk)
        
    elif request.method == "POST":
        data = request.data

        new_promotion = Promotion.objects.create(
            
        )
        
        serializer = StudentSerializer(new_promotion, many = False)

        return Response(serializer.data)

    elif request.method == "PUT":
        return Utils._update(request, Promotion, PromotionSerializer, pk)
    
    elif request.method == "DELETE":
        return Utils._delete(Promotion, pk)


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def studentViews(request, pk = None) -> Response:

    if request.method == "GET":

        if not pk:
            return Utils._list(Student, StudentSerializer)
        
        else:
            return Utils._get(Student, StudentSerializer, pk)
        
    elif request.method == "POST":
        data = request.data

        new_student = Student.objects.create_user(
            email = data['email'],
            first_name = data['first_name'],
            last_name = data['last_name'],
            sexe = data['sexe'],
            birthday = data['birthday'],
            address = data['address'],
            phone = data['phone'],
            password = data['pwd'],
        )
        
        serializer = StudentSerializer(new_student, many = False)

        return Response(serializer.data)

    elif request.method == "PUT":
        return Utils._update(request, Student, StudentSerializer, pk)
    
    elif request.method == "DELETE":
        return Utils._delete(Student, pk)
        
