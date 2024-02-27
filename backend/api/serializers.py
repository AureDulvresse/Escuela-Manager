from rest_framework.serializers import ModelSerializer

from .models import Student, Teacher, Promotion

class StudentSerializer(ModelSerializer):
    
    class Meta:
        model = Student
        fields = "__all__"


class TeacherSerializer(ModelSerializer):
    
    class Meta:
        model = Teacher
        fields = "__all__"


class PromotionSerializer(ModelSerializer):
    
    class Meta:
        model = Promotion
        fields = "__all__"


