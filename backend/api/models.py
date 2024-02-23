from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser

# Create your models here.
class MyUserManager(BaseUserManager):
    
    def create_user(self, email, first_name, last_name, sexe, birthday, address, phone, password = None):
        
        if not email:
            return ValueError("Une addresse mail est obligatoire")
        
        user = self.model(
            email = self.normalize_email(email),
            first_name = first_name,
            last_name = last_name,
            sexe = sexe,
            birthday = birthday,
            address = address,
            phone = phone,
        )

        user.set_password(password)
        user.save(using = self._db)
        
        return user
    
    def create_superuser(self, email, first_name, last_name, sexe, birthday, address, phone, password = None):

        user = self.create_user(
            email = email,
            first_name = first_name,
            last_name = last_name,
            sexe = sexe,
            birthday = birthday,
            address = address,
            phone = phone,
            password = password,
        )

        user.is_admin = True

        user.save(using = self._db)

        return user
    

class User(AbstractBaseUser):
    email = models.EmailField(
        max_length = 150,
        unique = True,
        verbose_name = "Adresse mail"
    )
    first_name = models.CharField(max_length = 70)
    last_name = models.CharField(max_length = 70)
    SEX_TYPES = (
        ('M', 'Masculin'),
        ('F', 'Feminin'),
    )
    sexe = models.CharField(
        max_length=1 ,
        choices = SEX_TYPES
    )
    birthday = models.DateField()
    address = models.CharField(max_length = 255)
    phone = models.CharField(
        max_length = 20,
        unique = True,
    )
    is_active = models.BooleanField(default = True)
    is_admin = models.BooleanField(default = False)
    profile_picture = models.CharField(
        max_length = 255,
        default = "user.png",
    )
    created_at = models.DateTimeField(auto_now_add  = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = MyUserManager()

    USERNAME_FIELD = "email"
    EMAIL_FIELD = "email"
    REQUIRED_FIELDS = [
        'frist_name',
        'last_name',
    ]

    class Meta:
        verbose_name = "Utilisateur"

    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name}"
    
    def has_perm(self, perm, obj = None):
        return True
    
    def has_module_perms(self, app_label):
        return True
    
    @property
    def is_staff(self):
        return self.is_admin
    

class Student(User):

    class Meta:
        verbose_name = "Etudiant"
    

class Promotion(models.Model):
    designation = models.CharField(
        max_length = 150,
        unique = True,
    )
    created_at = models.DateTimeField(auto_now_add  = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        verbose_name = "Classes | Promotion"

    def __str__(self) -> str:
        return self.designation

class Teacher(User):

    class Meta:
        verbose_name = "Prof"

class StudentPromotion(models.Model):
    student = models.OneToOneField(Student, on_delete = models.CASCADE)
    promo = models.ForeignKey(Promotion, on_delete = models.CASCADE)

    class Meta:
        verbose_name = "Etudiant de :"
        verbose_name_plural = "Etudiants de :"

    def __str__(self) -> str:
        return self.promo.designation

class Course(models.Model):
    
    designation = models.CharField(
        max_length = 255,
        unique = True,
    )
    description = models.TextField(
        blank = True,
        null = True,
    )
    created_at = models.DateTimeField(auto_now_add  = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        verbose_name = "Cours dispensé"

    def __str__(self) -> str:
        return self.designation


class PromotionCourse(models.Model):
    course = models.ForeignKey(Course, on_delete = models.CASCADE)
    promo = models.ForeignKey(Promotion, on_delete = models.CASCADE)

    class Meta:
        verbose_name = "Cours par classe :"
        verbose_name_plural = verbose_name

    def __str__(self) -> str:
        return f"{self.promo} cours : {self.course}"

class ClassRoom(models.Model):

    designation = models.CharField(
        max_length = 200,
        unique = True,
    )
    description = models.TextField(
        blank = True,
        null = True,
    )

    created_at = models.DateTimeField(auto_now_add  = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        verbose_name = "Salle de classe"
        verbose_name_plural = "Salles de classe"

    def __str__(self) -> str:
        return self.designation



