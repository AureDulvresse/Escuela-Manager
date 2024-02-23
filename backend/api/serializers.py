from rest_framework.serializers import ModelSerializer

from .models import Student, Teacher

class StudentSerializer(ModelSerializer):
    
    class Meta:
        model = Student
        fields = "__all__"


class TeacherSerializer(ModelSerializer):
    
    class Meta:
        model = Teacher
        fields = "__all__"


