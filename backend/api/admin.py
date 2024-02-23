from django.contrib import admin
from .models import User, Student, Teacher, Course, ClassRoom, Promotion, StudentPromotion

# Register your models here.
admin.site.register(User)
admin.site.register(Student)
admin.site.register(Teacher)
admin.site.register(ClassRoom)
admin.site.register(Course)
admin.site.register(Promotion)
admin.site.register(StudentPromotion)