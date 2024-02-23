import datetime
from django.http import HttpResponse

from faker import Faker
from faker.providers import DynamicProvider
from random import randint

from .models import *



def _UserSeeder(n) -> str:
    
    
    sexe_provider = DynamicProvider(
      provider_name="gender",
      elements=['M', 'F']
    )

    fake = Faker('fr_Fr')

    fake.add_provider(sexe_provider)
    
    admin = User.objects.create_superuser(
      'auredulvresse@gmail.com',
      'Aure',
      'Dulvresse',
      'M',
      datetime.date(2002,9, 14),
      'pointe-noire',
      '+242066825504',
      'password123456'
    )
    
    if admin is not None:
      print("SuperUser created")
    
    for _ in range(n):
      age = f'- {randint(14, 25)} years'


      Student.objects.create_user(
        fake.unique.email(),
        fake.first_name(),
        fake.last_name(),
        fake.gender(),
        fake.date(),
        fake.address(),
        fake.phone_number(),
        password = "password"
      )
    for _ in range(10):
      teacher_age = f'-{randint(30, 40)} years'
      Teacher.objects.create_user(
        fake.unique.email(),
        fake.first_name(),
        fake.last_name(),
        fake.gender(),
        fake.date(),
        fake.address(),
        fake.phone_number(),
        password = "password"
      )

    return "User Seeded !"
      

def _PromotionSeeder() -> str:

    fake = Faker('fr_Fr')
    
    listPromos = ["Seconde", "Première", "Terminal", "Licence 1", "Licence 2", "Licence 3", "Master"]
    
    for i in range(len(listPromos)):
      promo = Promotion()
        
      created_at = fake.date('-1 year')
    
      promo.designation = listPromos[i]
      promo.created_at = created_at
      promo.updated_at = created_at
        
      promo.save()

    return "Promo Seeded !"


def _CourseSeeder() -> str:

    fake = Faker('fr_Fr')
    
    listCourses = ["Mathématiques", "Mécanique", "Informatique", "Programmation", "Science-physique", "Philosophie", "Français", "Anglais", "Electricité", "Droit", "Musique", "CyberSécurité"]
    
    for i in range(len(listCourses)):
      course = Course()
      created_at = fake.date('-1 year')
        
      course.designation = listCourses[i]
      course.description = fake.sentence(nb_words = 8)
      course.created_at = created_at
      course.updated_at = created_at
      
      course.save()

    return "Course Seeded !"

def seed(request) -> HttpResponse:

  print("Dropping database...")
  
  StudentPromotion.objects.all().delete()
  PromotionCourse.objects.all().delete()
  ClassRoom.objects.all().delete()
  Course.objects.all().delete()
  Promotion.objects.all().delete()
  User.objects.all().delete()
  Student.objects.all().delete()
  Teacher.objects.all().delete()
  
  print("Database Deleted")
  print("Seeding ")
  
  print(_UserSeeder(20))
  print(_PromotionSeeder())
  print(_CourseSeeder())

  return HttpResponse(f'<h1>Database Seeded </h1>')
