from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Student, Promotion
from .serializers import StudentSerializer, PromotionSerializer

from .utils import Utils

# Create your views here.
        
@api_view(['GET'])
def statsView(request) -> Response:

    data = {
        'total_student' : Student.objects.all().count(),
    }

    return Response(data);

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def promotionView(request, pk=None) -> Response:
    
    if request.method == "GET":

        if not pk:
            return Utils._list(Promotion, PromotionSerializer)
        
        else:
            return Utils._getWithID(Promotion, PromotionSerializer, pk)
        
    elif request.method == "POST":
        data = request.data

        new_promotion = Promotion.objects.create(
            designation = data['designation']
        )
        
        serializer = StudentSerializer(new_promotion, many = False)

        return Response(serializer.data)

    elif request.method == "PUT":
        return Utils._updateWithID(request, Promotion, PromotionSerializer, pk)
    
    elif request.method == "DELETE":
        return Utils._deleteWithID(Promotion, pk)


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def studentView(request, pk = None) -> Response:

    if request.method == "GET":

        if not pk:
            return Utils._list(Student, StudentSerializer)
        
        else:
            return Utils._get(Student, StudentSerializer, pk)
        
    elif request.method == "POST":
        data = request.data

        promo = Promotion.objects.get(pk = data['promotion'])

        new_student = Student.objects.create_student(
            email = data['email'],
            first_name = data['first_name'],
            last_name = data['last_name'],
            sexe = data['sexe'],
            birthday = data['birthday'],
            place_birth = data['place_birth'],
            address = data['address'],
            phone = data['phone'],
            promotion = promo,
            password = "STU12345678",
        )
        
        serializer = StudentSerializer(new_student, many = False)

        return Response(serializer.data)

    elif request.method == "PUT":
        return Utils._update(request, Student, StudentSerializer, pk)
    
    elif request.method == "DELETE":
        return Utils._delete(Student, pk)

